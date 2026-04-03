package com.udg.ambulantes.backend.controller;

import com.udg.ambulantes.backend.model.User;
import com.udg.ambulantes.backend.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsersByIds(@RequestParam List<Long> ids) {
        return userService.getUsersByIds(ids);
    }

    @GetMapping
    public List<User> getFavoriteVendorsByIds(@RequestParam List<Long> ids) {
        return userService
    }
}
