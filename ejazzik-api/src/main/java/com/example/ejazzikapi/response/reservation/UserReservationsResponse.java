package com.example.ejazzikapi.response.reservation;

import com.example.ejazzikapi.model.Reservation;
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
    private List<Reservation> reservations;
    private boolean status;
}
