package com.example.ejazzikapi.repository;

import com.example.ejazzikapi.entity.AccommodationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface AccommodationRepository extends JpaRepository<AccommodationEntity, Integer> {
    AccommodationEntity findById(int id);
}
