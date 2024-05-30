package com.example.ejazzikapi.service;

import com.example.ejazzikapi.entity.ReservationEntity;
import com.example.ejazzikapi.model.Reservation;
import com.example.ejazzikapi.repository.ReservationRepository;
import com.example.ejazzikapi.repository.UserRepository;
import com.example.ejazzikapi.response.reservation.UserReservationsResponse;
import com.example.ejazzikapi.utils.Mapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collections;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ReservationServiceImpl implements ReservationService{
    protected final Logger logger = Logger.getLogger(getClass().getName());
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private Mapper mapper;


    @Override
    public UserReservationsResponse getAllUserReservations(Integer userId) {
        if (userRepository.existsById(userId)) {
            try {
                List<ReservationEntity> reservationEntities = reservationRepository.findAllByUserId(userId);
                if (reservationEntities.isEmpty()) {
                    return new UserReservationsResponse(Collections.emptyList(), false);
                } else {
                    List<Reservation> userReservations = reservationEntities.stream().map(mapper::mapToReservation).toList();
                    logger.log(Level.INFO, userReservations.size() + " reservations found for the user " + userId);
                    return new UserReservationsResponse(userReservations, true);
                }
            } catch (Exception e) {
                logger.log(Level.INFO, "Error while fetching user reservations " + e.getMessage());
                return new UserReservationsResponse(Collections.emptyList(), false);
            }
        } else {
            logger.log(Level.INFO, "No user with ID " + userId);
            return new UserReservationsResponse(null, false);
        }
    }
}
