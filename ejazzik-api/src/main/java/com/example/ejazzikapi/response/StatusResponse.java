package com.example.ejazzikapi.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
public class StatusResponse implements Serializable {
    @Serial
    private static final long serialVersionUID = 7809530636626295768L;
    @JsonProperty("errorMessages")
    private List<String> errorMessages;
    @JsonProperty("success")
    private boolean success;
}
