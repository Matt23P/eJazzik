package com.example.ejazzikapi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Attraction {
    private Integer attractionId;
    private String name;
    private String description;
    private String address;
    private String phoneNumber;
    private double price;
}
