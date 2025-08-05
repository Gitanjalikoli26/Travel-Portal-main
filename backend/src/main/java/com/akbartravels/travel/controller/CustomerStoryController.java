package com.akbartravels.travel.controller;

import com.akbartravels.travel.model.CustomerStory;
import com.akbartravels.travel.repository.CustomerStoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customer-stories")
public class CustomerStoryController {

    @Autowired
    private CustomerStoryRepository customerStoryRepository;

    @GetMapping
    public List<CustomerStory> getAllCustomerStories() {
        return customerStoryRepository.findAll();
    }
}