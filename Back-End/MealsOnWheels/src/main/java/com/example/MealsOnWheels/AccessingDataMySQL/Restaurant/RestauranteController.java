package com.example.MealsOnWheels.AccessingDataMySQL.Restaurant;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/restaurantes")
public class RestauranteController {
	@Autowired
	private RestauranteRepo restauranteRepo;


	@GetMapping()
	public List<Restaurante> getRestaurantes(){
		return this.restauranteRepo.findAll();
	}

	@PostMapping("checkPostcode")
	public String checkPostCodeAvailability(@Valid @RequestBody PostCodeRequest postCodeRequest) {
		Long price = Math.abs((Long.valueOf(postCodeRequest.getDeliveryPostCode(), 36) - Long.valueOf(postCodeRequest.getPickUpPostCode(), 36))/10000);
		return price.toString();

	}
}
