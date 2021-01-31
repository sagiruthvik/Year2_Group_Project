package com.example.MealsOnWheels.AccessingDataMySQL.appuser;

import com.example.MealsOnWheels.AccessingDataMySQL.exception.ApiRequestException;
import com.example.MealsOnWheels.AccessingDataMySQL.registration.token.ConfirmationToken;
import com.example.MealsOnWheels.AccessingDataMySQL.registration.token.ConfirmationTokenService;
import lombok.AllArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class UserServices implements UserDetailsService {

    private final UsersRepository usersRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;
    private final static String USER_NOT_FOUND_EMAIL = "User with email %s not found";
    private final static String USER_NOT_FOUND_USER_ID ="User with ID %s not found";

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return usersRepository.findByEmail(email).orElseThrow(() -> (new UsernameNotFoundException
                (String.format(USER_NOT_FOUND_EMAIL, email))));
    }

    public String signUpUsers(@Valid Users users) {
        boolean userExists = usersRepository.findByEmail(users.getEmail()).isPresent();
        if (userExists) {
            Optional<Users> currentUser = usersRepository.findByEmail(users.getEmail());
            if (currentUser.get().getAccountVerified()) {
                throw new IllegalStateException("Email already taken and verified, try Logging In.");
            } else {
                if (confirmationTokenService.checkIfValidTokenExist(currentUser.get())){
                    throw new IllegalStateException("A valid token already exists, verify it.");
                } else {
                    String newToken = UUID.randomUUID().toString();

                    ConfirmationToken newConfirmationToken = new ConfirmationToken(newToken, LocalDateTime.now(),
                            LocalDateTime.now().plusMinutes(15), currentUser.get());

                    confirmationTokenService.saveConfirmationToken(newConfirmationToken);

                    return "NEW TOKEN : " + newToken;
                }
            }
        } else {
            String encryptedPassword = bCryptPasswordEncoder.encode(users.getPassword());

            users.setPassword(encryptedPassword);

            usersRepository.save(users);

            String token = UUID.randomUUID().toString();

            ConfirmationToken confirmationToken = new ConfirmationToken(token, LocalDateTime.now(),
                    LocalDateTime.now().plusMinutes(15), users);

            confirmationTokenService.saveConfirmationToken(confirmationToken);

            return token;
        }
    }

    public int enableUserAccess(String email) {
        return usersRepository.enableUserAccess(email);
    }

    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    public Users getUserByID(long userID) {
        return usersRepository.findById(userID).orElseThrow(() -> (new ApiRequestException(String.format(USER_NOT_FOUND_USER_ID,  userID))));
    }

    public void addNewUser(Users user) {
        usersRepository.save(user);
    }

//    public void updateUser(long userID, Users user) {
//        Users existingUser = usersRepository.findById(userID).orElseThrow(() -> (new ApiRequestException(USER_NOT_FOUND_USER_ID + userID)));
//        existingUser.setFirstName(user.getFirstName());
//        existingUser.setLastName(user.getLastName());
//        existingUser.setDateOfBirth(user.getDateOfBirth());
//        existingUser.setAllergy(user.getAllergy());
//        existingUser.setUsername(user.getUsername());
//        existingUser.setPassword(user.getPassword());
//        // TODO : ADD Address ID
//        existingUser.setEmail(user.getEmail());
//        existingUser.setPhoneNumber(user.getPhoneNumber());
//        existingUser.setAccountVerified(user.getAccountVerified());
//        existingUser.setUpdated_at(user.getUpdated_at());
//        this.usersRepository.save(existingUser);
//    }

    public void deleteUser(long userID) {
        Users existingUser = usersRepository.findById(userID).
                orElseThrow(() -> (new ApiRequestException("No User Found With ID : " + userID)));
        usersRepository.delete(existingUser);
    }

    private boolean validateUsername() {

        return true;
    }


    //validate username
    //validate email
    //validate phone number
}
