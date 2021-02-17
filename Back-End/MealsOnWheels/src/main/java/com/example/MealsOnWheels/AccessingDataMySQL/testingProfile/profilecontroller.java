package com.example.MealsOnWheels.AccessingDataMySQL.testingProfile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/users")
public class profilecontroller{

    private final fetchprofiledata profiledata;

    @Autowired
    public profilecontroller(fetchprofiledata profiledata) {
        this.profiledata = profiledata;
    }

    @GetMapping(path = "ordersData")
    public List<profilemodel> getprofile(){
        return profiledata.findAll();
    }

}
