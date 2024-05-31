package com.example.ejazzikapi.service;

import com.example.ejazzikapi.entity.AttendantEntity;
import com.example.ejazzikapi.model.Attendant;
import com.example.ejazzikapi.repository.AttendantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.logging.Logger;

@Service
public class AttendantServiceImpl implements AttendantService {
    protected final Logger logger = Logger.getLogger(getClass().getName());
    @Autowired
    private AttendantRepository attendantRepository;

    @Override
    public Integer assignAttendantToTrip () throws Exception{
        List<AttendantEntity> allAttendants = attendantRepository.findAll();

        if (!allAttendants.isEmpty()) {
            Random random = new Random();
            int randomIndex = random.nextInt(allAttendants.size());
            AttendantEntity randomAttendant = allAttendants.get(randomIndex);
            return randomAttendant.getAttendantId();
        } else {
            throw new Exception("No attendants available");
        }
    }
}
