package com.example.MealsOnWheels.AccessingDataMySQL.Restaurant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface RestauranteRepo extends JpaRepository<Restaurante, Long>  {
    @Transactional
    @Modifying
    @Query("SELECT postcode from Restaurante")
    List<String> getAllRestaurantPostcodes();
}
