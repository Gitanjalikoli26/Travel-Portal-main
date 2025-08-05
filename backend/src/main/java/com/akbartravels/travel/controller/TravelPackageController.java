package com.akbartravels.travel.controller;

import com.akbartravels.travel.model.TravelPackage;
import com.akbartravels.travel.repository.TravelPackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*; // Make sure CrossOrigin is imported

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors; // For example filtering

@RestController
@RequestMapping("/api/packages")
@CrossOrigin(origins = "http://localhost:3000") // IMPORTANT: Add this for CORS
public class TravelPackageController {

    @Autowired
    private TravelPackageRepository travelPackageRepository;

    // This handles GET /api/packages (and /api/packages?destinationId=X)
    @GetMapping
    public List<TravelPackage> getAllPackages(@RequestParam(required = false) Long destinationId) {
        if (destinationId != null) {
            return travelPackageRepository.findByDestinationId(destinationId);
        }
        return travelPackageRepository.findAll();
    }

    // NEW: Endpoint for packages to be displayed in a grid
    @GetMapping("/grid")
    public List<TravelPackage> getGridPackages() {
        // Implement logic here to return packages suitable for the grid view.
        // For example, you might want a subset, or packages marked as 'recommended'.
        // For now, returning all packages is a good start.
        // You could also apply sorting or limit the number of results.
        return travelPackageRepository.findAll();
        // Example: return travelPackageRepository.findAll().stream().limit(4).collect(Collectors.toList());
    }

    // NEW: Endpoint for packages to be displayed in a list
    @GetMapping("/list")
    public List<TravelPackage> getListPackages() {
        // Implement logic here to return packages suitable for the list view.
        // This could be different from the grid view, or the same, depending on your needs.
        // For now, returning all packages is a good start.
        return travelPackageRepository.findAll();
    }

    @GetMapping("/{id}") // Handles GET /api/packages/{id}
    public Optional<TravelPackage> getPackageById(@PathVariable Long id) {
        return travelPackageRepository.findById(id);
    }

    // Example of an agent/admin protected endpoint
    // @PreAuthorize("hasAnyRole('AGENT', 'ADMIN')")
    // @PostMapping
    // public TravelPackage createPackage(@RequestBody TravelPackage travelPackage) {
    //     return travelPackageRepository.save(travelPackage);
    // }
}