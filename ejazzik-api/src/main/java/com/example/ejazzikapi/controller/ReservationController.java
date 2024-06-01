package com.example.ejazzikapi.controller;

import com.example.ejazzikapi.model.Reservation;
import com.example.ejazzikapi.request.reservation.CreateReservationRequest;
import com.example.ejazzikapi.response.reservation.UserReservationsResponse;
import com.example.ejazzikapi.response.StatusResponse;
import com.example.ejazzikapi.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("ejazzik/v1/reservation")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @GetMapping(path = "/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserReservationsResponse> getUserReservations(@PathVariable Integer userId) {
        UserReservationsResponse response = reservationService.getAllUserReservations(userId);
        return ResponseEntity.ok(response);
    }

    @PostMapping(path = "/create", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<StatusResponse> createReservation(@RequestBody CreateReservationRequest request) {
        
        return null;
    }

    @GetMapping(path = "/{reservationId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Reservation> createReservation(@PathVariable Integer reservationId) {
        Reservation reservation = reservationService.getReservationById(reservationId);
        return ResponseEntity.ok(reservation);
    }
}
