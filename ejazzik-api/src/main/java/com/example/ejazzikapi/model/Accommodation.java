package com.example.ejazzikapi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Accommodation {
    private Integer accommodationId;
    private String name;
    private String description;
    private String address;
    private String maxPeople;
    private String standard;
    private String phoneNumber;
    private double price;
}
