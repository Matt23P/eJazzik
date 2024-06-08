package com.example.ejazzikapi.service;

import com.example.ejazzikapi.model.Participant;
import com.example.ejazzikapi.response.StatusResponse;

import java.util.List;

public interface ParticipantService {
    StatusResponse updateParticipants(List<Participant> participants);
}
