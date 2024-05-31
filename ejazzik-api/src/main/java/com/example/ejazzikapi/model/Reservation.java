package com.example.ejazzikapi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {
    private Integer reservationId;
    private Integer userId;
    private Attendant attendant;
    private Trip trip;
    private List<Participant> participants;
    private LocalDate buyDate;
}
