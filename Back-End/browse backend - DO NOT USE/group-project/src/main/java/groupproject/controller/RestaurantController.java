package groupproject.groupproject.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import groupproject.groupproject.exceptions.ResourceNotFoundException;
import groupproject.groupproject.model.Food;
import groupproject.groupproject.model.Restaurant;
import groupproject.groupproject.repository.RestaurantRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class RestaurantController {
	


	@Autowired
	private RestaurantRepository restRepository;
	

	//get food 
	@GetMapping("/browseRests")
	public List<Restaurant> getRestaurants(){
		return this.restRepository.findAll();
	}


}
