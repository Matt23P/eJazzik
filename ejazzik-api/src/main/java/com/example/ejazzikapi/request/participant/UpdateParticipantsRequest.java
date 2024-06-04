package com.example.ejazzikapi.request.participant;

import com.example.ejazzikapi.model.Participant;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Getter
public class UpdateParticipantsRequest implements Serializable {
    @Serial
    private static final long serialVersionUID = -8271770544501159164L;
    @JsonProperty("participants")
    private List<Participant> participants;
}
