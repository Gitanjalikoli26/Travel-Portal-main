package com.akbartravels.travel.controller;

import com.akbartravels.travel.model.TravelPackage;
import com.akbartravels.travel.repository.TravelPackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agent")
@PreAuthorize("hasAnyRole('AGENT', 'ADMIN')") // All methods in this controller require AGENT or ADMIN role
public class AgentController {

    @Autowired
    private TravelPackageRepository travelPackageRepository;

    // Agents might have specific operations, e.g., booking packages
    @GetMapping("/my-bookings")
    public String getAgentBookings() {
        // Placeholder for agent-specific booking logic
        return "List of bookings for the authenticated agent.";
    }

    // Agents can view packages, maybe even update some specific fields (if allowed)
    @GetMapping("/packages")
    public List<TravelPackage> viewPackages() {
        return travelPackageRepository.findAll();
    }

    // Example: Agent can mark a package as "available" or "unavailable" (requires specific logic/fields in TravelPackage)
    // @PutMapping("/packages/{id}/status")
    // public ResponseEntity<?> updatePackageStatus(@PathVariable Long id, @RequestBody Map<String, Boolean> statusUpdate) {
    //     // Logic to update status
    //     return ResponseEntity.ok("Package status updated.");
    // }
}