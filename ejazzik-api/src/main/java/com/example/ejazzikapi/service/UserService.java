package com.example.ejazzikapi.service;

import com.example.ejazzikapi.request.user.LoginRequest;
import com.example.ejazzikapi.request.user.SignUpRequest;
import com.example.ejazzikapi.response.user.LoginResponse;
import com.example.ejazzikapi.response.StatusResponse;

public interface UserService {
    StatusResponse signUpNewUser(SignUpRequest request);
    StatusResponse deleteUser(Integer userId);
    LoginResponse login(LoginRequest loginRequest);
    StatusResponse changeUserFirstName(String newFirstName, Integer userId);
    StatusResponse changeUserLastName(String newLastName, Integer userId);
    StatusResponse changeUserEmail(String newEmail, Integer userId);
    StatusResponse changeUserPhoneNumber(String newPhoneNumber, Integer userId);
    StatusResponse changeUserPassword(String newPwd, Integer userId);
}
