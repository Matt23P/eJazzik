package com.example.ejazzikapi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Attendant {
    private Integer attendantId;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
}
