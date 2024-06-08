package com.example.ejazzikapi.controller;

import com.example.ejazzikapi.request.participant.UpdateParticipantsRequest;
import com.example.ejazzikapi.response.StatusResponse;
import com.example.ejazzikapi.service.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("ejazzik/v1/participant")
public class ParticipantController {
    @Autowired
    private ParticipantService participantService;

    @PutMapping(path = "/update", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<StatusResponse> updateParticipant(@RequestBody UpdateParticipantsRequest request) {
        StatusResponse response = participantService.updateParticipants(request.getParticipants());
        return ResponseEntity.ok(response);
    }
}
