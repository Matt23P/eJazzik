package com.example.ejazzikapi.request.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.io.Serial;
import java.io.Serializable;

@Getter
public class LoginRequest implements Serializable {
    @Serial
    private static final long serialVersionUID = -2110055056207165850L;
    @JsonProperty("email")
    private String email;
    @JsonProperty("password")
    private String password;
}
