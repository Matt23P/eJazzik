package com.example.ejazzikapi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Flight {
    private Integer flightId;
    private String airportDeparture;
    private String dateDeparture;
    private String timeDeparture;
    private String carrier;
    private String airportArrival;
    private String dateArrival;
    private String timeArrival;
    private String luggage;
    private String standard;
    private double price;
}
