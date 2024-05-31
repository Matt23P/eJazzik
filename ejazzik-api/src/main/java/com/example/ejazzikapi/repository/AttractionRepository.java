package com.example.ejazzikapi.repository;

import com.example.ejazzikapi.entity.AttractionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface AttractionRepository extends JpaRepository<AttractionEntity, Integer> {
    AttractionEntity findById(int id);
}
