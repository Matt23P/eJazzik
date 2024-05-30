package com.example.ejazzikapi.repository;

import com.example.ejazzikapi.entity.AttendantEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface AttendantRepository extends JpaRepository<AttendantEntity, Integer> {
    AttendantEntity findById(int id);
}
