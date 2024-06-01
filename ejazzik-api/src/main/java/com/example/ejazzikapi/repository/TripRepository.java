package com.example.ejazzikapi.repository;

import com.example.ejazzikapi.entity.TripEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface TripRepository extends JpaRepository<TripEntity, Integer> {
    TripEntity findById(int id);

    @Query("SELECT t FROM TripEntity t WHERE t.tripId NOT IN (SELECT r.tripId FROM ReservationEntity r)")
    List<TripEntity> findAllAvailableTrips();
}
