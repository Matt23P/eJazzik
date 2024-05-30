package com.example.ejazzikapi.repository;

import com.example.ejazzikapi.entity.TripAttractionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface TripAttractionRepository extends JpaRepository<TripAttractionEntity, Integer> {
    List<TripAttractionEntity> findAllByTripId(Integer tripId);
}
