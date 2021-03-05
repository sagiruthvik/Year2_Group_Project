package com.example.MealsOnWheels.AccessingDataMySQL.Restaurant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestauranteRepo extends JpaRepository<Restaurante, Long>  {

}
