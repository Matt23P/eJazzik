package com.example.ejazzikapi.response;

import com.example.ejazzikapi.model.User;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class LoginResponse {
    private boolean status;
    private String message;
    private User user;
}
