package com.example.ejazzikapi.controller;

import com.example.ejazzikapi.model.Trip;
import com.example.ejazzikapi.response.trip.AvailableTripsResponse;
import com.example.ejazzikapi.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("ejazzik/v1/trip")
public class TripController {
    @Autowired
    private TripService tripService;

    @GetMapping(path = "/available", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AvailableTripsResponse> getAvailableTrips() {
        AvailableTripsResponse response = tripService.getAllAvailableTrips();
        return ResponseEntity.ok(response);
    }

    @GetMapping(path = "/{tripId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Trip> getAvailableTrips(@PathVariable Integer tripId) {
        Trip response = tripService.getTripById(tripId);
        return ResponseEntity.ok(response);
    }
}
