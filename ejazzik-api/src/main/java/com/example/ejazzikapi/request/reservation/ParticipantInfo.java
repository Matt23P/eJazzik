package com.example.ejazzikapi.request.reservation;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.io.Serial;
import java.io.Serializable;

@Getter
public class ParticipantInfo implements Serializable {
    @Serial
    private static final long serialVersionUID = -707105719369226453L;
    @JsonProperty("firstName")
    private String fistName;
    @JsonProperty("lastName")
    private String lastName;
    @JsonProperty("pesel")
    private String pesel;
    @JsonProperty("email")
    private String email;
    @JsonProperty("passportNumber")
    private String passportNumber;
    @JsonProperty("birthDate")
    private String birthDate;
}
