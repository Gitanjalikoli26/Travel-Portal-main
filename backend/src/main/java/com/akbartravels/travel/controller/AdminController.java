package com.akbartravels.travel.controller;

import com.akbartravels.travel.model.TravelPackage;
import com.akbartravels.travel.model.User;
import com.akbartravels.travel.repository.TravelPackageRepository;
import com.akbartravels.travel.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')") // All methods in this controller require ADMIN role
public class AdminController {

    @Autowired
    private TravelPackageRepository travelPackageRepository;

    @Autowired
    private UserRepository userRepository;

    // Travel Package Management (Admin can create, update, delete packages)
    @PostMapping("/packages")
    public TravelPackage createPackage(@RequestBody TravelPackage travelPackage) {
        return travelPackageRepository.save(travelPackage);
    }

    @PutMapping("/packages/{id}")
    public TravelPackage updatePackage(@PathVariable Long id, @RequestBody TravelPackage travelPackage) {
        return travelPackageRepository.findById(id).map(existingPackage -> {
            existingPackage.setName(travelPackage.getName());
            existingPackage.setDescription(travelPackage.getDescription());
            existingPackage.setPrice(travelPackage.getPrice());
            existingPackage.setDurationDays(travelPackage.getDurationDays());
            existingPackage.setImageUrl(travelPackage.getImageUrl());
            existingPackage.setDestination(travelPackage.getDestination());
            return travelPackageRepository.save(existingPackage);
        }).orElseThrow(() -> new RuntimeException("Package not found with id " + id));
    }

    @DeleteMapping("/packages/{id}")
    public void deletePackage(@PathVariable Long id) {
        travelPackageRepository.deleteById(id);
    }

    // User Management (Admin can view, modify users)
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // You might add endpoints here for updating user roles, etc.
}