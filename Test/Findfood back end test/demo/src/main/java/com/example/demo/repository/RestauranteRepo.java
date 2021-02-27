package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Restaurante;

@Repository
public interface RestauranteRepo extends JpaRepository<Restaurante, Long>  {

}
