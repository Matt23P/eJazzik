package com.example.ejazzikapi.response.trip;

import com.example.ejazzikapi.model.Trip;
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
    private List<Trip> trips;
    private boolean status;
}
