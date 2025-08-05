package com.akbartravels.travel.controller;

import com.akbartravels.travel.model.Destination;
import com.akbartravels.travel.repository.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/destinations")
public class DestinationController {

    @Autowired
    private DestinationRepository destinationRepository;

    @GetMapping
    public List<Destination> getAllDestinations() {
        return destinationRepository.findAll();
    }

    // Example of a protected endpoint (can be moved to Admin controller if needed)
    // @PreAuthorize("hasRole('ADMIN')")
    // @PostMapping
    // public Destination createDestination(@RequestBody Destination destination) {
    //     return destinationRepository.save(destination);
    // }
}