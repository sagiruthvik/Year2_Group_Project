package groupproject.groupproject.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
@Entity
@Table(name = "Restaurant_table")
public class Restaurant {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long restaurantId;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	
	
	public Restaurant() {
		
	}

	

	public long getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(long restaurantId) {
		this.restaurantId = restaurantId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public Restaurant(String name, String description) {
		super();
		this.name = name;
		this.description = description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
