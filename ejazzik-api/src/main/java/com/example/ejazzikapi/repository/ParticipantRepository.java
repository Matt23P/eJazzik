package com.example.ejazzikapi.repository;

import com.example.ejazzikapi.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Integer> {
    ParticipantEntity findById(int id);
    List<ParticipantEntity> findAllByReservationId(Integer reservationId);

    @Modifying
    @Query("UPDATE ParticipantEntity p SET p.firstName = :#{#participant.firstName}, p.lastName = :#{#participant.lastName}, p.email = :#{#participant.email}, p.birthDate = :#{#participant.birthDate}, p.passportNumber = :#{#participant.passportNumber}, p.pesel = :#{#participant.pesel} WHERE p.participantId = :participantId")
    void updateByParticipantId(@Param("participantId") int participantId, @Param("participant") ParticipantEntity participant);

}
