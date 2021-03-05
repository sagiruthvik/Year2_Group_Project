package com.example.MealsOnWheels.AccessingDataMySQL.Restaurant;

import java.util.ArrayList;
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

	@PostMapping("/checkPostcode")
	public Boolean checkPostCodeAvailability(@Valid @RequestBody PostCodeRequest postCodeRequest) {
		List<String> resturantPostcodes = restauranteRepo.getAllRestaurantPostcodes();
		System.out.println(resturantPostcodes);
		List<Long> pricePerPostcode = new ArrayList<>();
		for (String currentPostCode :
				resturantPostcodes) {
			Long price = Math.abs((Long.valueOf(postCodeRequest.getDeliveryPostCode(), 36) - Long.valueOf(currentPostCode, 36))/10000);
			pricePerPostcode.add(price);
		}
		for (Long currentPrice :
				pricePerPostcode) {
			return currentPrice <= 22;
		}
		return false;
	}
}
