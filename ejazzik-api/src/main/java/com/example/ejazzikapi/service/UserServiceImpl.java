package com.example.ejazzikapi.service;

import com.example.ejazzikapi.entity.UserEntity;
import com.example.ejazzikapi.repository.UserRepository;
import com.example.ejazzikapi.request.user.SignUpRequest;
import com.example.ejazzikapi.response.StatusResponse;
import com.example.ejazzikapi.utils.Validator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collections;
import java.util.List;
import java.util.logging.Logger;

public class UserServiceImpl implements UserService{

    protected final Logger logger = Logger.getLogger(getClass().getName());
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private Validator validator;

    @Override
    public StatusResponse signUpNewUser(SignUpRequest createNewSignUpRequest) {
        //TODO Validation segment WIP
        List<String> validationErrors = validator.signUpValidation(createNewSignUpRequest);
        if (validationErrors.isEmpty()) {
            try {
                UserEntity newUser = UserEntity.builder()
                        .firstName(createNewSignUpRequest.getFirstName())
                        .lastName(createNewSignUpRequest.getLastName())
                        .email(createNewSignUpRequest.getEmail())
                        .password(this.passwordEncoder.encode(createNewSignUpRequest.getPassword()))
                        .phoneNumber(createNewSignUpRequest.getPhoneNumber())
                        .creationDate(createNewSignUpRequest.getCreationDate())
                        .build();
                userRepository.save(newUser);
                logger.info("New user created");
                return new StatusResponse(null, true);
            } catch (Exception e) {
                logger.info("Error while creating new user: " + e.getMessage());
                return new StatusResponse(Collections.singletonList("Error while creating the user. Please try again later"),
                        false);
            }
        } else {
            return new StatusResponse(validationErrors, false);
        }
    }

    @Override
    public StatusResponse deleteUser(Integer userId) {
        if (userRepository.existsById(userId)) {
            try {
                userRepository.deleteById(userId);
                logger.info("User with ID " + userId +" successfully deleted");
                return new StatusResponse(null, true);
            } catch (Exception e) {
                logger.info("Error while deleting user: " + e.getMessage());
                return new StatusResponse(Collections.singletonList("Error while deleting the user. Please try again later"),
                        false);
            }
        } else {
            logger.info("User with ID " + userId + " does not exist");
            return new StatusResponse(Collections.singletonList("No such user"),
                    false);
        }
    }

}
