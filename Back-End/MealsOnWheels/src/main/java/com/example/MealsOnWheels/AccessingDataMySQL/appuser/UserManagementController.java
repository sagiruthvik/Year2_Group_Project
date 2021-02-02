package com.example.MealsOnWheels.AccessingDataMySQL.appuser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "management/api/v1/users")
public class UserManagementController {

    private final UserServices userServices;

    @Autowired
    public UserManagementController(UserServices userServices) {
        this.userServices = userServices;
    }

    @GetMapping
    public List<Users> getAllUsers() {
        return userServices.getAllUsers();
    }

    @GetMapping(path = "{userID}")
    public Users getCustomerByID(@PathVariable(value = "userID") Long userID) {
        return userServices.getUserByID(userID);
    }

    //TODO add post method to add new admin users.

    //TODO add put method to update students and admins users. (below not functioning double check)

//    @PutMapping(path = "/{userID}")
//    public void updateUser(@PathVariable("userID") long userID, @RequestBody @Valid Users user) {
//        userServices.updateUser(userID, user);
//    }

    @DeleteMapping(path = "{userID}")
    public void deleteUser(@PathVariable("userID") long userID) {
        userServices.deleteUser(userID);
    }
}
