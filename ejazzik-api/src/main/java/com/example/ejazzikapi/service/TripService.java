package com.example.ejazzikapi.service;

import com.example.ejazzikapi.model.Trip;
import com.example.ejazzikapi.response.trip.AvailableTripsResponse;

public interface TripService {
    AvailableTripsResponse getAllAvailableTrips();
    Trip getTripById(Integer tripId);
}
