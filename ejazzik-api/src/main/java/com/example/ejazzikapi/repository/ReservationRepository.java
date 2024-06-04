package com.example.ejazzikapi.repository;

import com.example.ejazzikapi.entity.ReservationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface ReservationRepository extends JpaRepository<ReservationEntity, Integer> {
    List<ReservationEntity> findAllByUserId(Integer userId);
    ReservationEntity findByTripId(Integer tripId);
}
