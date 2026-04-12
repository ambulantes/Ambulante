package com.udg.ambulantes.backend.controller;

import com.udg.ambulantes.backend.dto.UserResponse;
import com.udg.ambulantes.backend.model.User;
import com.udg.ambulantes.backend.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final UserService userservice;

    public AuthController(UserService userService) {
        this.userservice = userService;
    }

    @GetMapping("/login")
    public UserResponse login(@AuthenticationPrincipal UserDetails userDetails) {
        return userservice.getUserResponseByEmail(userDetails.getUsername());
    }
}
