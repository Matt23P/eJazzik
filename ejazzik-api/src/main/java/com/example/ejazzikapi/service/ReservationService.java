package com.example.ejazzikapi.service;

import com.example.ejazzikapi.model.Reservation;
import com.example.ejazzikapi.request.reservation.CreateReservationRequest;
import com.example.ejazzikapi.response.StatusResponse;
import com.example.ejazzikapi.response.reservation.UserReservationsResponse;

public interface ReservationService {
    UserReservationsResponse getAllUserReservations(Integer userId);
    StatusResponse createNewReservation(CreateReservationRequest request);
    Reservation getReservationById(Integer id);
}
