package com.example.ejazzikapi.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "flights")
public class FlightEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer flightId;

    @Column(name = "airportDeparture")
    private String airportDeparture;

    @Column(name = "dateDeparture")
    private String dateDeparture;

    @Column(name = "timeDeparture")
    private String timeDeparture;

    @Column(name = "carrier")
    private String carrier;

    @Column(name = "airportArrival")
    private String airportArrival;

    @Column(name = "datearrival")
    private String dateArrival;

    @Column(name = "timearrival")
    private String timeArrival;

    @Column(name = "luggage")
    private String luggage;

    @Column(name = "standard")
    private String standard;

    @Column(name = "price")
    private double price;
}
