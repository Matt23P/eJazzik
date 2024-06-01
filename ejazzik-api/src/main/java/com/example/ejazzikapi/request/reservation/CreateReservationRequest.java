package com.example.ejazzikapi.request.reservation;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.io.Serial;
import java.io.Serializable;

@Getter
public class CreateReservationRequest implements Serializable {
    @Serial
    private static final long serialVersionUID = 446034657777518157L;
    @JsonProperty("tripId")
    private Integer tripId;
    @JsonProperty("userId")
    private Integer userId;
}
