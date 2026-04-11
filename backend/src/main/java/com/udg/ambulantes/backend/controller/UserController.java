package com.udg.ambulantes.backend.controller;

import com.udg.ambulantes.backend.dto.FavoriteVendorResponse;
import com.udg.ambulantes.backend.dto.RegisterRequest;
import com.udg.ambulantes.backend.model.User;
import com.udg.ambulantes.backend.repository.UserRepository;
import com.udg.ambulantes.backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;

    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void register(@RequestBody @Valid RegisterRequest request) {
        userService.register(request);
    }

    @GetMapping("/by-ids")
    public List<User> getUsersByIds(@RequestParam List<Long> ids) {
        return userService.getUsersByIds(ids);
    }

    // TODO: Replace userId with authenticated session user when auth is implemented
    @GetMapping("/{id}/favorites")
    public List<FavoriteVendorResponse> getFavoriteVendorsByIds(@PathVariable("id") Long userId) {
        return userService.getFavoriteVendorsById(userId);
    }
}
