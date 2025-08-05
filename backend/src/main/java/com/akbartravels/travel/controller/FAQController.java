package com.akbartravels.travel.controller;

import com.akbartravels.travel.model.FAQ;
import com.akbartravels.travel.repository.FAQRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/faqs")
public class FAQController {

    @Autowired
    private FAQRepository faqRepository;

    @GetMapping
    public List<FAQ> getAllFAQs() {
        return faqRepository.findAll();
    }
}