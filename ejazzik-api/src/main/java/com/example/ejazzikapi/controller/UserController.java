package com.example.ejazzikapi.controller;

import com.example.ejazzikapi.request.user.SignUpRequest;
import com.example.ejazzikapi.response.StatusResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("ejazzik/v1/user")
public class UserController {

    @PostMapping(path = "/signup")
    public ResponseEntity<StatusResponse> signUpNewUser(@RequestBody SignUpRequest request) {

        return ResponseEntity.ok(new StatusResponse());
    }
}
