package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Restaurante;
import com.example.demo.repository.RestauranteRepo;
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/")
public class RestauranteController {
	
		@Autowired
		private RestauranteRepo restauranteRepo;
		
		
		@GetMapping("restaurantes")
		public List<Restaurante> getRestaurantes(){
			
			return this.restauranteRepo.findAll();
			
		}
	
}
