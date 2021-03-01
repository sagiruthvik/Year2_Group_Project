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
import groupproject.groupproject.model.UserCart;
import groupproject.groupproject.repository.FoodRepository;
import groupproject.groupproject.repository.RestaurantRepository;
import groupproject.groupproject.repository.UserCartRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class FoodController {
	

	
	@Autowired
	private FoodRepository foodRepository;
	
	

	@Autowired
	private RestaurantRepository restRepository;
	

	@Autowired
	private UserCartRepository userCartRepository;
	
	
	//get restaurants 
	@GetMapping("/browse-restaurants")
	public List<Restaurant> getRestaurants(){
		return this.restRepository.findAll();
	}

	
	
	
	
	
	//get food 
	@GetMapping("/browse")
	public List<Food> getFood(){
		return this.foodRepository.findAll();
	}
	
	// add to user order list
	@PostMapping("/usercart")
	@CrossOrigin(origins = "http://localhost:3000")
	public UserCart addItem(@RequestBody UserCart userCart) {
		return userCartRepository.save(userCart);
	}
	
	//get food 
	@GetMapping("/get_cart")
	public List<UserCart> getCart(){
		return this.userCartRepository.findAll();
	}
	
	
	
	// create menu item
	@PostMapping("/add_food")
	@CrossOrigin(origins = "http://localhost:3000")
	public Food createFood(@RequestBody Food food) {
		return foodRepository.save(food);
	}
	@GetMapping("/browse/{id}")
	public ResponseEntity<Food> getFoodById(@PathVariable Long id){
		Food food = foodRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Food does not exist with id:"+id));
		return ResponseEntity.ok(food);
	
	}
	
	//update
	@PutMapping("/browse/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Food> updateFood(@PathVariable Long id,@RequestBody Food foodDetails){
		Food food = foodRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Food does not exist with id:"+id));
		food.setName(foodDetails.getName());
		food.setType(foodDetails.getType());
		food.setDescription(foodDetails.getDescription());
		
		Food updatedFood = foodRepository.save(food);
		return ResponseEntity.ok(updatedFood);
	
	}
	
	// delete food menu item
	@DeleteMapping("/browse/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteFood(@PathVariable Long id){
		Food food = foodRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Food does not exist with id:"+id)); 
		foodRepository.delete(food);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	


}
