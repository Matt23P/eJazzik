package com.example.ejazzikapi.service;

import com.example.ejazzikapi.request.user.LoginRequest;
import com.example.ejazzikapi.request.user.SignUpRequest;
import com.example.ejazzikapi.response.user.LoginResponse;
import com.example.ejazzikapi.response.user.StatusResponse;
import com.example.ejazzikapi.response.user.UserReservationsResponse;

public interface UserService {
    public StatusResponse signUpNewUser(SignUpRequest request);
    public StatusResponse deleteUser(Integer userId);
    public LoginResponse login(LoginRequest loginRequest);
    public StatusResponse changeUserFirstName(String newFirstName, Integer userId);
    public StatusResponse changeUserLastName(String newLastName, Integer userId);
    public StatusResponse changeUserEmail(String newEmail, Integer userId);
    public StatusResponse changeUserPhoneNumber(String newPhoneNumber, Integer userId);
    public StatusResponse changeUserPassword(String newPwd, Integer userId);
    public UserReservationsResponse getAllUserReservations(Integer userId);
}
