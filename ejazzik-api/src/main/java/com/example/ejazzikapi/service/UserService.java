package com.example.ejazzikapi.service;

import com.example.ejazzikapi.request.user.SignUpRequest;
import com.example.ejazzikapi.response.StatusResponse;

public interface UserService {
    public StatusResponse signUpNewUser(SignUpRequest request);
    public StatusResponse deleteUser(Integer userId);
}
