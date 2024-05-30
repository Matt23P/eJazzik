package com.example.ejazzikapi.service;

import com.example.ejazzikapi.response.reservation.UserReservationsResponse;

public interface ReservationService {
    public UserReservationsResponse getAllUserReservations(Integer userId);
}
