package com.example.ejazzikapi.repository;

import com.example.ejazzikapi.entity.TripEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface TripRepository extends JpaRepository<TripEntity, Integer> {
    TripEntity findById(int id);
}
