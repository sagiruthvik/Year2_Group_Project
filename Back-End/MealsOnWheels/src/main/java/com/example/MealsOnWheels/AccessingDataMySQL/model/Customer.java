package com.example.MealsOnWheels.AccessingDataMySQL.model;

import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "Customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="customerID", nullable = false)
    private Long customerID;

    @NotBlank(message = "First Name cannot be null.") // For validating java beans in the JVM.
    @Column(name="firstName", nullable=false) // nullable to give indication to JPA.
    private String firstName;

    @NotBlank(message = "Last Name cannot be null.")
    @Column(name="lastName", nullable=false)
    private String lastName;

    @NotNull(message = "Date Of Birth cannot be null.")
    @Column(name="dateOfBirth", nullable=false)
    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;  // Ref: https://stackoverflow.com/questions/25333711/what-is-the-use-of-the-temporal-annotation-in-hibernate

    @NotBlank(message = "Gender cannot be null.")
    @Column(nullable = false)
    private String gender;

    private String allergy;

    @NotBlank(message = "Location cannot be null.")
    @Column(name="location", nullable = false)
    private String location;

    @NotNull(message = "Account Verified Status cannot be null.")
    @Column(name="accountVerified", nullable = false)
    private boolean accountVerified;

    // TODO : Enable Login Param After Login Model Implementation. (ref: https://www.baeldung.com/jpa-one-to-one)
    /*@NotNull(message = "loginID cannot be null.") // TODO Double check if @NotNull is required.
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="loginID", referencedColumnName = "loginID")
    @Column(name="loginID", nullable = false)
    private Login login;*/

    @UpdateTimestamp
    //@NotNull(message = "Timestamp cannot be null.")
    @Column(name="updatedAt", nullable=false)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date updatedAt;

    public Customer() {

    }

    public Customer(String firstName, String lastName, Date dateOfBirth, String gender, String allergy,
                    String location, Boolean accountVerified) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.allergy = allergy;
        this.location = location;
        this.accountVerified = accountVerified;
        // TODO: Add loginID param.
    }

    public Long getCustomerID() {
        return customerID;
    }

    public void setCustomerID(Long customerID) {
        this.customerID = customerID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAllergy() {
        return allergy;
    }

    public void setAllergy(String allergy) {
        this.allergy = allergy;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public boolean isAccountVerified() {
        return accountVerified;
    }

    public void setAccountVerified(boolean accountVerified) {
        this.accountVerified = accountVerified;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    // TODO: Add Getter And Setter For loginID once above(param) implemented.
}
