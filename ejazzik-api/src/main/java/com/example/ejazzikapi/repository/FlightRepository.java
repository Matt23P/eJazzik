package com.example.ejazzikapi.repository;

import com.example.ejazzikapi.entity.FlightEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface FlightRepository extends JpaRepository<FlightEntity, Integer> {
    FlightEntity findById(int id);
}
