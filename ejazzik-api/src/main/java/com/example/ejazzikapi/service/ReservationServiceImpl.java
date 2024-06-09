package com.example.ejazzikapi.service;

import com.example.ejazzikapi.entity.ReservationEntity;
import com.example.ejazzikapi.model.Reservation;
import com.example.ejazzikapi.repository.ParticipantRepository;
import com.example.ejazzikapi.repository.ReservationRepository;
import com.example.ejazzikapi.repository.UserRepository;
import com.example.ejazzikapi.request.reservation.CreateReservationRequest;
import com.example.ejazzikapi.request.reservation.ParticipantInfo;
import com.example.ejazzikapi.response.StatusResponse;
import com.example.ejazzikapi.response.reservation.UserReservationsResponse;
import com.example.ejazzikapi.utils.Mapper;
import com.example.ejazzikapi.utils.Validator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class ReservationServiceImpl implements ReservationService{
    protected final Logger logger = Logger.getLogger(getClass().getName());
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private AttendantService attendantService;
    @Autowired
    private Mapper mapper;
    @Autowired
    private Validator validator;
    @Autowired
    private ParticipantRepository participantRepository;


    @Override
    public UserReservationsResponse getAllUserReservations(Integer userId) {
        if (userRepository.existsById(userId)) {
            try {
                List<ReservationEntity> reservationEntities = reservationRepository.findAllByUserId(userId);
                if (reservationEntities.isEmpty()) {
                    logger.log(Level.INFO, "No reservations found for the user " + userId);
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

    @Override
    public StatusResponse createNewReservation(CreateReservationRequest request) {
        if (reservationRepository.findByTripId(request.getTripId()) != null) {
            logger.log(Level.INFO, "This trip is already reserved");
            return new StatusResponse(Collections.singletonList("This trip is already reserved"), false);
        }
        String errMsg = validator.checkExistenceOfTripAndUser(request.getTripId(), request.getUserId());
        // TODO check if trip is not already reserved
        if (errMsg != null) {
            logger.log(Level.INFO, errMsg);
            return new StatusResponse(Collections.singletonList(errMsg), false);
        }
        try {
            ReservationEntity reservationEntity = new ReservationEntity();
            reservationEntity.setTripId(request.getTripId());
            reservationEntity.setUserId(request.getUserId());
            reservationEntity.setBuyDate(LocalDate.now());
            reservationEntity.setAttendantId(attendantService.assignAttendantToTrip());
            reservationRepository.save(reservationEntity);
            Integer reservationId = reservationRepository.findByTripId(request.getTripId()).getReservationId();
            for (ParticipantInfo part : request.getParticipants()) {
                participantRepository.save(mapper.mapParticipantInfoToEntity(part, reservationId));
            }
            return new StatusResponse(null, true);
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Error while saving reservation " + e.getMessage());
            return new StatusResponse(Collections.singletonList("Please try again later - function out of service"), false);
        }
    }

    @Override
    public Reservation getReservationById(Integer id) {
        if (reservationRepository.existsById(id)) {
            ReservationEntity reservationEntity = reservationRepository.findById(id).get();
            logger.log(Level.INFO, "Reservation " + id + " found " + reservationEntity.toString());
            return mapper.mapToReservation(reservationEntity);
        } else {
            logger.log(Level.INFO, "Reservation with ID " +  id + " doesn't exist");
            return null;
        }
    }

    @Override
    public StatusResponse deleteReservation(Integer id) {
        if (reservationRepository.existsById(id)) {
            try {
                participantRepository.deleteAllByReservationId(id);
                reservationRepository.deleteById(id);
                logger.log(Level.INFO, "Reservation with ID " +  id + " deleted");
                return new StatusResponse(null, true);
            } catch (Exception ex) {
                logger.log(Level.SEVERE, "Exception while deleting reservation " + ex.getMessage());
                return new StatusResponse(Collections.singletonList("Error while deleting the reservation -" +
                        " please try again later"), false);
            }
        } else {
            logger.log(Level.INFO, "Reservation with ID " +  id + " doesn't exist ");
            return new StatusResponse(Collections.singletonList("Couldn't delete reservation - it doesn't exist"), false);
        }
    }
}
