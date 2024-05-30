package com.example.ejazzikapi.controller;

import com.example.ejazzikapi.response.trip.AvailableTripsResponse;
import com.example.ejazzikapi.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("ejazzik/v1/trip")
public class TripController {
    @Autowired
    private TripService tripService;

    @GetMapping(path = "/available")
    public ResponseEntity<AvailableTripsResponse> getAvailableTrips() {
        AvailableTripsResponse response = new AvailableTripsResponse();
        return ResponseEntity.ok(response);
    }
}
