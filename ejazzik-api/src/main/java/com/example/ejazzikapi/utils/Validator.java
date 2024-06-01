package com.example.ejazzikapi.utils;

import com.example.ejazzikapi.repository.TripRepository;
import com.example.ejazzikapi.repository.UserRepository;
import com.example.ejazzikapi.request.user.SignUpRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static com.example.ejazzikapi.utils.Constants.EMAIL_REGEX;
import static com.example.ejazzikapi.utils.Constants.PHONE_REGEX;

@Component
public class Validator {
    protected final Logger logger = Logger.getLogger(getClass().getName());
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TripRepository tripRepository;


    public List<String> signUpValidation(SignUpRequest signUpRequest) {
        List<String> errors = new ArrayList<>(Collections.emptyList());

        // email exists?
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            errors.add("This email address is already taken");
        }
        // is email in proper regex?
        String emailValidationErr = validateEmail(signUpRequest.getEmail());
        if (emailValidationErr != null) {
            errors.add(emailValidationErr);
        }
        // is length of firstname/lastname proper?
        String firstNameValidationErr = validateName(signUpRequest.getFirstName(), signUpRequest.getLastName());
        if (firstNameValidationErr != null) {
            errors.add(firstNameValidationErr);
        }

        String phoneNumberValidationErr = validatePhoneNumber(signUpRequest.getPhoneNumber());
        if (phoneNumberValidationErr != null) {
            errors.add(phoneNumberValidationErr);
        }

        String passwordValidationErr = validatePassword(signUpRequest.getPassword());
        if (passwordValidationErr != null) {
            errors.add(passwordValidationErr);
        }

        return errors;
    }

    public String validateEmail(String email) {
        if (email == null || email.isEmpty() || email.length() > 128) {
            return "Email address cannot be empty and shorter that 128 characters.";
        } else {
            Pattern patternEmail = Pattern.compile(EMAIL_REGEX);
            Matcher emailMatcher = patternEmail.matcher(email);
            if (!emailMatcher.matches()) {
                logger.log(Level.INFO, "Invalid email");
                return "Invalid email - it does not look like email sus.";
            } else {
                return null;
            }
        }
    }

    public String validateName(String name, String lastName) {
        if (name == null || name.isEmpty() || name.length() > 128 || lastName == null || lastName.isEmpty() || lastName.length() > 128) {
            return "First name and last name must be shorter than 128 characters.";
        } else {
            return null;
        }
    }

    public String validatePhoneNumber(String phoneNumber) {
        if (phoneNumber == null || phoneNumber.isEmpty()) {
            return "Phone number cannot be empty.";
        } else {
            Pattern patternPhone = Pattern.compile(PHONE_REGEX);
            Matcher emailMatcher = patternPhone.matcher(phoneNumber);
            if (!emailMatcher.matches()) {
                logger.log(Level.INFO, "Invalid email");
                return "Invalid email - it does not look like email sus.";
            } else {
                return null;
            }
        }
    }

    public String validatePassword(String password) {
        if (password == null || password.isEmpty()) {
            return "Password cannot be empty.";
        } else {
            return null;
        }
    }

    public String checkExistenceOfTripAndUser(Integer tripId, Integer userId) {
        if (userRepository.existsById(userId)) {
            if (!tripRepository.existsById(tripId)) {
                return "No trip found for id " + tripId;
            }
            return null;
        } else {
            return "No user with id " + userId + " exists.";
        }
    }
}
