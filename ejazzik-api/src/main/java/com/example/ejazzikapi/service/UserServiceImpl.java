package com.example.ejazzikapi.service;

import com.example.ejazzikapi.entity.UserEntity;
import com.example.ejazzikapi.model.User;
import com.example.ejazzikapi.repository.UserRepository;
import com.example.ejazzikapi.request.user.LoginRequest;
import com.example.ejazzikapi.request.user.SignUpRequest;
import com.example.ejazzikapi.response.user.LoginResponse;
import com.example.ejazzikapi.response.StatusResponse;
import com.example.ejazzikapi.utils.Validator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class UserServiceImpl implements UserService {

    protected final Logger logger = Logger.getLogger(getClass().getName());
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private Validator validator;

    @Override
    public StatusResponse signUpNewUser(SignUpRequest createNewSignUpRequest) {
        List<String> validationErrors = validator.signUpValidation(createNewSignUpRequest);
        if (validationErrors.isEmpty()) {
            try {
                UserEntity newUser = UserEntity.builder()
                        .firstName(createNewSignUpRequest.getFirstName())
                        .lastName(createNewSignUpRequest.getLastName())
                        .email(createNewSignUpRequest.getEmail())
                        .password(this.passwordEncoder.encode(createNewSignUpRequest.getPassword()))
                        .phoneNumber(createNewSignUpRequest.getPhoneNumber())
                        .creationDate(LocalDate.now())
                        .build();
                userRepository.save(newUser);
                logger.info("New user created");
                return new StatusResponse(null, true);
            } catch (Exception e) {
                logger.log(Level.SEVERE,"Error while creating new user: " + e.getMessage());
                return new StatusResponse(Collections.singletonList("Error while creating the user. Please try again later"),
                        false);
            }
        } else {
            logger.info("Validation failed: " + validationErrors.toString());
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

    @Override
    public LoginResponse login(LoginRequest loginRequest) {
        if (userRepository.existsByEmail(loginRequest.getEmail())) {
            try {
                UserEntity userEntity = userRepository.findByEmail(loginRequest.getEmail());
                String pwd = loginRequest.getPassword();
                String encodedPwd = userEntity.getPassword();
                if (passwordEncoder.matches(pwd, encodedPwd)) {
                    User user = new User(
                            userEntity.getUserId(),
                            userEntity.getFirstName(),
                            userEntity.getLastName(),
                            userEntity.getEmail(),
                            userEntity.getPhoneNumber(),
                            userEntity.getCreationDate()
                    );
                    logger.log(Level.INFO, "Login success");
                    return new LoginResponse(true, null, user);
                } else {
                    logger.log(Level.INFO, "Wrong email or password");
                    return new LoginResponse(false, "Wrong email or password", null);
                }
            } catch (Exception e) {
                logger.log(Level.SEVERE, "Error while getting the user from DB " + e.getMessage());
                return new LoginResponse(false, "Service unavailable, please try again later", null);
            }
        } else {
            logger.log(Level.INFO, "No user with this email found");
            return new LoginResponse(false, "Wrong email or password", null);
        }
    }

    @Override
    public StatusResponse changeUserFirstName(String newFirstName, Integer userId) {
        if (userRepository.existsById(userId)) {
            String error = validator.validateName(newFirstName, "lastName");
            if (error != null) {
                logger.log(Level.INFO, error);
                return new StatusResponse(Collections.singletonList(error), false);
            }
            UserEntity userEntity = userRepository.findById(userId).get();
            userEntity.setFirstName(newFirstName);
            return userUpdate(userEntity, userId);
        } else {
            logger.log(Level.INFO, "No user with this ID");
            return new StatusResponse(Collections.singletonList("No such user"), false);
        }
    }

    @Override
    public StatusResponse changeUserLastName(String newLastName, Integer userId) {
        if (userRepository.existsById(userId)) {
            String error = validator.validateName(newLastName, "lastName");
            if (error != null) {
                logger.log(Level.INFO, error);
                return new StatusResponse(Collections.singletonList(error), false);
            }
            UserEntity userEntity = userRepository.findById(userId).get();
            userEntity.setLastName(newLastName);
            return userUpdate(userEntity, userId);
        } else {
            logger.log(Level.INFO, "No user with this ID");
            return new StatusResponse(Collections.singletonList("No such user"), false);
        }
    }

    @Override
    public StatusResponse changeUserEmail(String newEmail, Integer userId) {
        if (userRepository.existsById(userId)) {
            String error = validator.validateEmail(newEmail);
            if (error != null) {
                logger.log(Level.INFO, error);
                return new StatusResponse(Collections.singletonList(error), false);
            }
            UserEntity userEntity = userRepository.findById(userId).get();
            userEntity.setEmail(newEmail);
            return userUpdate(userEntity, userId);
        } else {
            logger.log(Level.INFO, "No user with this ID");
            return new StatusResponse(Collections.singletonList("No such user"), false);
        }
    }

    @Override
    public StatusResponse changeUserPhoneNumber(String newPhoneNumber, Integer userId) {
        if (userRepository.existsById(userId)) {
            String error = validator.validatePhoneNumber(newPhoneNumber);
            if (error != null) {
                logger.log(Level.INFO, error);
                return new StatusResponse(Collections.singletonList(error), false);
            }
            UserEntity userEntity = userRepository.findById(userId).get();
            userEntity.setPhoneNumber(newPhoneNumber);
            return userUpdate(userEntity, userId);
        } else {
            logger.log(Level.INFO, "No user with this ID");
            return new StatusResponse(Collections.singletonList("No such user"), false);
        }
    }

    @Override
    public StatusResponse changeUserPassword(String newPwd, Integer userId) {
        if (userRepository.existsById(userId)) {
            String error = validator.validatePassword(newPwd);
            if (error != null) {
                logger.log(Level.INFO, error);
                return new StatusResponse(Collections.singletonList(error), false);
            }
            UserEntity userEntity = userRepository.findById(userId).get();
            userEntity.setPassword(newPwd);
            return userUpdate(userEntity, userId);
        } else {
            logger.log(Level.INFO, "No user with this ID");
            return new StatusResponse(Collections.singletonList("No such user"), false);
        }
    }

    private StatusResponse userUpdate(UserEntity entity, Integer userId) {
        try {
            userRepository.updateByUserId(userId, entity);
            logger.log(Level.INFO, "User successfully updated");
            return new StatusResponse(null, true);
        } catch (Exception e) {
            logger.log(Level.INFO, "Error while updating the user " + userId + " : " + e.getMessage() + " " + e.toString());
            return new StatusResponse(Collections.singletonList("Server error - please try again later"), false);
        }
    }

}
