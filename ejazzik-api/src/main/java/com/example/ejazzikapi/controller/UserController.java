package com.example.ejazzikapi.controller;

import com.example.ejazzikapi.request.user.LoginRequest;
import com.example.ejazzikapi.request.user.SignUpRequest;
import com.example.ejazzikapi.response.user.LoginResponse;
import com.example.ejazzikapi.response.user.StatusResponse;
import com.example.ejazzikapi.response.user.UserReservationsResponse;
import com.example.ejazzikapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("ejazzik/v1/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(path = "/signup")
    public ResponseEntity<StatusResponse> signUpNewUser(@RequestBody SignUpRequest request) {
        StatusResponse response = userService.signUpNewUser(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping(path = "/login")
    public ResponseEntity<LoginResponse> loginUser(@RequestBody LoginRequest request) {
        LoginResponse response = userService.login(request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping(path = "/delete/{userId}")
    public ResponseEntity<StatusResponse> deleteUser (@PathVariable("userId") Integer userId) {
        StatusResponse response = userService.deleteUser(userId);
        return ResponseEntity.ok(response);
    }

    @PutMapping(path = "/update/{userId}/firstname/{newFirstName}")
    public ResponseEntity<StatusResponse> updateFirstName (@PathVariable("newFirstName") String newFirstName,
                                                           @PathVariable("userId") Integer userId) {
        StatusResponse response = userService.changeUserFirstName(newFirstName, userId);
        return ResponseEntity.ok(response);
    }

    @PutMapping(path = "/update/{userId}/lastName/{newLastName}")
    public ResponseEntity<StatusResponse> updateLastName (@PathVariable("newLastName") String newLastName,
                                                           @PathVariable("userId") Integer userId) {
        StatusResponse response = userService.changeUserLastName(newLastName, userId);
        return ResponseEntity.ok(response);
    }

    @PutMapping(path = "/update/{userId}/email/{newEmail}")
    public ResponseEntity<StatusResponse> updateEmail (@PathVariable("newEmail") String newEmail,
                                                          @PathVariable("userId") Integer userId) {
        StatusResponse response = userService.changeUserEmail(newEmail, userId);
        return ResponseEntity.ok(response);
    }

    @PutMapping(path = "/update/{userId}/phone/{newPhone}")
    public ResponseEntity<StatusResponse> updatePhoneNumber (@PathVariable("newPhone") String newPhone,
                                                       @PathVariable("userId") Integer userId) {
        StatusResponse response = userService.changeUserPhoneNumber(newPhone, userId);
        return ResponseEntity.ok(response);
    }

    @PutMapping(path = "/update/{userId}/password/{newPwd}")
    public ResponseEntity<StatusResponse> updatePassword (@PathVariable("newPwd") String newPwd,
                                                             @PathVariable("userId") Integer userId) {
        StatusResponse response = userService.changeUserPassword(newPwd, userId);
        return ResponseEntity.ok(response);
    }

    @GetMapping(path = "/reservations/{userId}")
    public ResponseEntity<UserReservationsResponse> getAllUserReservations(@PathVariable("userId") Integer userId) {
        UserReservationsResponse response = userService.getAllUserReservations(userId);
        return ResponseEntity.ok(response);
    }
}
