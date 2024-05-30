package com.example.ejazzikapi.service;

import com.example.ejazzikapi.entity.TripEntity;
import com.example.ejazzikapi.model.Trip;
import com.example.ejazzikapi.repository.TripRepository;
import com.example.ejazzikapi.response.trip.AvailableTripsResponse;
import com.example.ejazzikapi.utils.Mapper;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class TripServiceImpl implements TripService {
    private static final org.slf4j.Logger log = LoggerFactory.getLogger(TripServiceImpl.class);
    protected final Logger logger = Logger.getLogger(getClass().getName());
    @Autowired
    private TripRepository tripRepository;
    @Autowired
    private Mapper mapper;

    public AvailableTripsResponse getAllAvailableTrips() {
        try {
            List<TripEntity> availableTrips = tripRepository.findAllAvailableTrips();
            if (availableTrips.isEmpty()) {
                logger.log(Level.INFO, "No available trips found");
                return new AvailableTripsResponse(null, false);
            } else {
                List<Trip> trips = availableTrips.stream().map(mapper::mapToTrip).toList();
                logger.log(Level.INFO, trips.size() + " available trips found");
                return new AvailableTripsResponse(trips, true);
            }
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Error while getting available trips " + e.getMessage());
            return new AvailableTripsResponse(null, false);
        }
    }
}
