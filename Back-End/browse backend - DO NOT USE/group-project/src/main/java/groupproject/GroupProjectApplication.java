package groupproject.groupproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import groupproject.groupproject.model.Food;
import groupproject.groupproject.repository.FoodRepository;


@SpringBootApplication
public class GroupProjectApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(GroupProjectApplication.class, args);
	}

	
	@Override
	public void run(String... args) throws Exception {
//		this.foodRepository.save(new Food("Burger","Fast Food","A McDonalds burger consisting of chicken,lettuce and mayonase"));
//		this.foodRepository.save(new Food("Sushi","Seafood","A piece of salmon rolled in rice and seaweed"));
//		this.foodRepository.save(new Food("Fried Rice","Chinese","Fried rice consisting of egg and chicken"));
//		this.foodRepository.save(new Food("Pizza","Fast Food","Pizza with ham ,beef and chicken"));
//		this.foodRepository.save(new Food("Fish And Chips","Fast Food","Fried fish with a side of lemon and fries"));
//		this.foodRepository.save(new Food("Seabass","Seafood","Fried seabass"));
	}

}
