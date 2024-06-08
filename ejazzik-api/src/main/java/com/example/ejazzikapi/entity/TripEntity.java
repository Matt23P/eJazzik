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
import lombok.ToString;

@Entity
@Builder
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "trips")
public class TripEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer tripId;

    @Column(name = "accommodationid")
    private Integer accommodationId;

    @Column(name = "flightdepartureid")
    private Integer flightDepartureId;

    @Column(name = "flightarrivalid")
    private Integer flightArrivalId;

    @Column(name = "date")
    private String date;

    @Column(name = "city")
    private String city;

    @Column(name = "country")
    private String country;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "numberofpeople")
    private Integer numberOfPeople;

    @Column(name = "provision")
    private double provision;
}
