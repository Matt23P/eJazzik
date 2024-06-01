package com.example.ejazzikapi.response.trip;

import com.example.ejazzikapi.model.Trip;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
public class AvailableTripsResponse implements Serializable {
    @Serial
    private static final long serialVersionUID = -1661215053132206590L;
    @JsonProperty("trips")
    private List<Trip> trips;
    @JsonProperty("status")
    private boolean status;
}
