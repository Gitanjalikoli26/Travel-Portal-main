package com.akbartravels.travel.repository;

import com.akbartravels.travel.model.TravelPackage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TravelPackageRepository extends JpaRepository<TravelPackage, Long> {
    List<TravelPackage> findByDestinationId(Long destinationId);
}