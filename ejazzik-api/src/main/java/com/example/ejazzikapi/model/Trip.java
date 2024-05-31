package com.example.ejazzikapi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Trip {
    private Integer tripId;
    private Accommodation accommodation;
    private Flight flightDeparture;
    private Flight flightArrival;
    private List<Attraction> attractions;
    private String name;
    private String description;
    private String country;
    private String city;
    private String date;
    private double pricePerPerson;
    private Integer numberOfPeople;
    private double provision;
    private double totalPrice;
}
