package com.akbartravels.travel.repository;

import com.akbartravels.travel.model.CustomerStory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerStoryRepository extends JpaRepository<CustomerStory, Long> {
}