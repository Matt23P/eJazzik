package com.example.ejazzikapi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Participant {
    private Integer participantId;
    private Integer reservationId;
    private String fistName;
    private String lastName;
    private String pesel;
    private String email;
    private String passportNumber;
    private LocalDate birthDate;
}
