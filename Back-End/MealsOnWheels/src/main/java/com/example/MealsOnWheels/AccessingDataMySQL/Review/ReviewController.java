package com.example.MealsOnWheels.AccessingDataMySQL.Review;

import com.example.MealsOnWheels.AccessingDataMySQL.Restaurant.RestauranteRepo;
import net.bytebuddy.asm.Advice;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/review")

public class ReviewController {

    @Autowired
    private ReviewRepo reviewRepo;


    @PostMapping("/newReview")
    public void saveReview (@Valid @RequestBody ReviewRequest reviewRequest) {
        Review review = new Review(reviewRequest.getName(), reviewRequest.getDescription());
        reviewRepo.save(review);
    }

}
