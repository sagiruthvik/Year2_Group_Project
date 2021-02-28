package com.example.MealsOnWheels.AccessingDataMySQL.ProfilePages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/users")
public class profilecontroller{

    private final fetchorderdata orderdata;
    private final fetchfavouritedata favdata;
    private final fetchaddressdata addressdata;

    @Autowired
    public profilecontroller(fetchorderdata orderdata, fetchfavouritedata favdata, fetchaddressdata addressdata) {
        this.orderdata = orderdata;
        this.favdata = favdata;
        this.addressdata = addressdata;
    }

    @GetMapping(path = "ordersData")
    public List<ordermodel> getorderdata(){
        return orderdata.findAll();
    }

    @GetMapping(path = "favData")
    public List<favouritemodel> getfavdata() {return favdata.findAll(); }

    @GetMapping(path = "addressData")
    public List<addressmodel> getaddressdata(){ return addressdata.findAll(); }
}
