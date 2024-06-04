package com.example.ejazzikapi.service;

import com.example.ejazzikapi.entity.ParticipantEntity;
import com.example.ejazzikapi.model.Participant;
import com.example.ejazzikapi.repository.ParticipantRepository;
import com.example.ejazzikapi.response.StatusResponse;
import com.example.ejazzikapi.utils.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class ParticipantServiceImpl implements ParticipantService {
    protected final Logger logger = Logger.getLogger(getClass().getName());
    @Autowired
    private ParticipantRepository participantRepository;
    @Autowired
    private Mapper mapper;

    @Override
    public StatusResponse updateParticipants(List<Participant> participants) {
        List<String> errors = new ArrayList<>();
        for (Participant participant : participants) {
            if (participantRepository.existsById(participant.getParticipantId())) {
                ParticipantEntity participantEntity = mapper.mapParticipantToEntity(participant);
                try {
                    participantRepository.updateByParticipantId(participant.getParticipantId(), participantEntity);
                } catch (Exception ex) {
                    errors.add("Participant " + participant.getParticipantId() + " " + participant.getFistName()
                            + " " + participant.getLastName() + " couldn't be updated");
                    logger.log(Level.SEVERE, "Error while updating participant " + participant.getParticipantId()
                            + " " + ex.getMessage());
                }
            } else {
                errors.add("Participant " + participant.getParticipantId() + " " + participant.getFistName()
                        + " " + participant.getLastName() + " doesn't exist");
                logger.log(Level.INFO, "Participant " + participant.getParticipantId() +
                        " doesn't exist - couldn't be updated");
            }
        }
        return new StatusResponse(errors, errors.isEmpty());
    }
}
