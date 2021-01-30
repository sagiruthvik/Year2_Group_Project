package com.example.MealsOnWheels.AccessingDataMySQL.registration;

import com.example.MealsOnWheels.AccessingDataMySQL.appuser.UserRoles;
import com.example.MealsOnWheels.AccessingDataMySQL.appuser.UserServices;
import com.example.MealsOnWheels.AccessingDataMySQL.appuser.Users;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final UserServices userServices;
    private final EmailValidator emailValidators;
    private static Logger logger = LoggerFactory.getLogger(RegistrationService.class);

    public String register(RegistrationRequest request) {
        boolean isValidEmail = emailValidators.test(request.getEmail());
        if (!isValidEmail) {
            throw new IllegalStateException("Email not valid!");
        }
        return userServices.signUpUsers(
                new Users(request.getFirstName(), request.getLastName(), request.getDateOfBirth(), request.getEmail(),
                        request.getPassword(), UserRoles.USER, request.getPhone(),
                request.getAllergy(), request.getAccountVerified()));
    }

}


