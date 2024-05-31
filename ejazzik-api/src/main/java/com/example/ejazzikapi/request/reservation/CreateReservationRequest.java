package com.example.ejazzikapi.request.reservation;

import lombok.Getter;

import java.io.Serial;
import java.io.Serializable;

@Getter
public class CreateReservationRequest implements Serializable {
    @Serial
    private static final long serialVersionUID = 446034657777518157L;
    private Integer tripId;
    private Integer userId;
}
