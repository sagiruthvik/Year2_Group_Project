package com.example.MealsOnWheels.AccessingDataMySQL.ProfilePages;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface fetchaddressdata extends JpaRepository<addressmodel, Integer> {
}
