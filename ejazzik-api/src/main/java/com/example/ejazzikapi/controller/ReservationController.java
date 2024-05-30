package com.example.ejazzikapi.controller;

import com.example.ejazzikapi.response.reservation.UserReservationsResponse;
import com.example.ejazzikapi.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("ejazzik/v1/reservation")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @GetMapping(path = "/{userId}")
    public ResponseEntity<UserReservationsResponse> getUserReservations(@PathVariable Integer userId) {
        UserReservationsResponse response = reservationService.getAllUserReservations(userId);
        return ResponseEntity.ok(response);
    }
}
