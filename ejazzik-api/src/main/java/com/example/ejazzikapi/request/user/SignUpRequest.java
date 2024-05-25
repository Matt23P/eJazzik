package com.example.ejazzikapi.request.user;

import lombok.Getter;

import java.io.Serial;
import java.io.Serializable;
import java.util.Date;

@Getter
public class SignUpRequest implements Serializable {
    @Serial
    private static final long serialVersionUID = 4011609074544725261L;
    private Integer id;     //set only in update request
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNumber;
    private Date creationDate;
}
