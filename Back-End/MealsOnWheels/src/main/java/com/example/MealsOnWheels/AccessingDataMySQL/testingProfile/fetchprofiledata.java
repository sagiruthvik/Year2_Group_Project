package com.example.MealsOnWheels.AccessingDataMySQL.testingProfile;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface fetchprofiledata extends JpaRepository<profilemodel, Integer> {
}
