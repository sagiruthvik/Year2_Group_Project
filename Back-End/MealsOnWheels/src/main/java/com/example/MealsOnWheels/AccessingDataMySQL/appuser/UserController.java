package com.example.MealsOnWheels.AccessingDataMySQL.appuser;
import com.example.MealsOnWheels.AccessingDataMySQL.testingProfile.fetchprofiledata;
import com.example.MealsOnWheels.AccessingDataMySQL.testingProfile.profilemodel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

// @CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/users")
public class UserController {

    private final UserServices userServices;

    @Autowired
    public UserController(UserServices userServices) {
        this.userServices = userServices;
    }

    @GetMapping
    public Users getMyUserInfo() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Object userEmail = auth.getPrincipal();
//        System.out.println("getMyUserInfo Triggered.\n" + userEmail.toString());
        return (Users) userServices.loadUserByUsername(userEmail.toString());
    }

    //TODO add missing mappings for user model controller.
}
