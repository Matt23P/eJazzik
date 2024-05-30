package com.example.ejazzikapi.repository;

import com.example.ejazzikapi.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Integer> {
    ParticipantEntity findById(int id);
    List<ParticipantEntity> findAllByReservationId(int reservationId);
}
