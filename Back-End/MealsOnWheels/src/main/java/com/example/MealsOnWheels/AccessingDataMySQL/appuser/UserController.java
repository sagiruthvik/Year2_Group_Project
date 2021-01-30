package com.example.MealsOnWheels.AccessingDataMySQL.appuser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserServices userServices;

    @Autowired
    public UserController(UserServices userServices) {
        this.userServices = userServices;
    }

    @GetMapping
    public List<Users> getAllUsers() {
        return userServices.getAllUsers();
    }

    @GetMapping(path = "/{userID}")
    public Users getCustomerByID(@PathVariable(value = "userID") Long userID) {
        return userServices.getUserByID(userID);
    }

    @PostMapping
    public void createNewUser(@RequestBody @Valid Users users) {
        userServices.addNewUser(users);
    }

//    @PutMapping(path = "/{userID}")
//    public void updateUser(@PathVariable("userID") long userID, @RequestBody @Valid Users user) {
//        userServices.updateUser(userID, user);
//    }

    @DeleteMapping(path = "/{userID}")
    public void deleteUser(@PathVariable("userID") long userID) {
        userServices.deleteUser(userID);
    }
    
}
