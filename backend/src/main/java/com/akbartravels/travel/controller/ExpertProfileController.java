package com.akbartravels.travel.controller;

import com.akbartravels.travel.model.ExpertProfile;
import com.akbartravels.travel.repository.ExpertProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expert-profile")
public class ExpertProfileController {

    @Autowired
    private ExpertProfileRepository expertProfileRepository;

    @GetMapping
    public List<ExpertProfile> getAllExpertProfiles() {
        return expertProfileRepository.findAll();
    }
}