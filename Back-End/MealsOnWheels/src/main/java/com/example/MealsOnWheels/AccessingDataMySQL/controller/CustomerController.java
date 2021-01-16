package com.example.MealsOnWheels.AccessingDataMySQL.controller;
import com.example.MealsOnWheels.AccessingDataMySQL.exception.ResourceNotFoundException;
import com.example.MealsOnWheels.AccessingDataMySQL.model.Customer;
import com.example.MealsOnWheels.AccessingDataMySQL.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/rest/customers")
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping
    public List<Customer> getAllCustomers() {
        return this.customerRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Customer getCustomerByID(@PathVariable(value = "id") Long customerId) {
        return this.customerRepository.findById(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("No Customer Found With ID : " + customerId));
    }

    @PostMapping
    public Customer createCustomer(@Valid @RequestBody Customer customer) {
        return this.customerRepository.save(customer);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Customer> deleteCustomer(@PathVariable(value = "id") Long customerId) {
        Customer existingCustomer = this.customerRepository.findById(customerId).
                orElseThrow(() -> new ResourceNotFoundException("No Customer Found With ID : " + customerId));
        this.customerRepository.delete(existingCustomer);
        return ResponseEntity.ok().build();
    }

    @PutMapping(path = "/{id}") public Customer updateCustomer(@Valid @RequestBody Customer customer, @PathVariable(value = "id") Long customerId) {
        Customer existingCustomer = this.customerRepository.findById(customerId).
                orElseThrow(() -> new ResourceNotFoundException("No Customer Found With ID : " + customerId));
        existingCustomer.setFirstName(customer.getFirstName());
        existingCustomer.setLastName(customer.getLastName());
        existingCustomer.setDateOfBirth(customer.getDateOfBirth());
        existingCustomer.setGender(customer.getGender());
        existingCustomer.setAllergy(customer.getAllergy());
        existingCustomer.setLocation(customer.getLocation());
        existingCustomer.setAccountVerified(customer.isAccountVerified());
        existingCustomer.setUpdatedAt(customer.getUpdatedAt());
        return this.customerRepository.save(existingCustomer);
    }
}
