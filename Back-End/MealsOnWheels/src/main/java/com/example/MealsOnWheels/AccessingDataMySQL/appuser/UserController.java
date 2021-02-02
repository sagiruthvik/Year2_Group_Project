package com.example.MealsOnWheels.AccessingDataMySQL.appuser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/users")
public class UserController {

    @GetMapping
    public Users getMyUserInfo() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Object userEmail = auth.getPrincipal();
//        System.out.println("getMyUserInfo Triggered.\n" + userEmail.toString());
        return (Users) userEmail;
    }

    //TODO add missing mappings for user model controller.
}
