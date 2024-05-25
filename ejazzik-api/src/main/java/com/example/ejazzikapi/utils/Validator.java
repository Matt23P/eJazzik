package com.example.ejazzikapi.utils;

import com.example.ejazzikapi.repository.UserRepository;
import com.example.ejazzikapi.request.user.SignUpRequest;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static com.example.ejazzikapi.utils.Constants.EMAIL_REGEX;

public class Validator {
    protected final Logger logger = Logger.getLogger(getClass().getName());
    @Autowired
    private UserRepository userRepository;


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



        return errors;
    }

    public String validateEmail(String email) {
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
