package com.example.ejazzikapi.response.reservation;

import com.example.ejazzikapi.model.Reservation;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
public class UserReservationsResponse implements Serializable {
    @Serial
    private static final long serialVersionUID = -7515804561593939548L;
    @JsonProperty("reservations")
    private List<Reservation> reservations;
    @JsonProperty("status")
    private boolean status;
}
