package com.example.MealsOnWheels.AccessingDataMySQL.appuser;

import com.example.MealsOnWheels.AccessingDataMySQL.exception.ApiRequestException;
import lombok.AllArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.util.List;

@Service
@AllArgsConstructor
public class UserServices implements UserDetailsService {

    private final UsersRepository usersRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
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
            throw new IllegalStateException("Email already taken.");
        }
        String encryptedPassword = bCryptPasswordEncoder.encode(users.getPassword());

        users.setPassword(encryptedPassword);

        usersRepository.save(users);
        // TODO: Send confirmation token.
        return "it works";
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
