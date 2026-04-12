package com.udg.ambulantes.backend.service;

import com.udg.ambulantes.backend.dto.FavoriteVendorResponse;
import com.udg.ambulantes.backend.dto.RegisterRequest;
import com.udg.ambulantes.backend.dto.UserResponse;
import com.udg.ambulantes.backend.model.User;
import com.udg.ambulantes.backend.repository.FavoriteVendorRepository;
import com.udg.ambulantes.backend.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final FavoriteVendorRepository favoriteVendorRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository,
                       FavoriteVendorRepository favoriteVendorRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.favoriteVendorRepository = favoriteVendorRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void register(RegisterRequest request) {
        if(userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "El email ya esta registrado");
        }

        User user = new User();
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        userRepository.save(user);
    }

    public UserResponse getUserResponseByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Usuario no encontrado"));

        return new UserResponse(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getImgUrl(),
                user.getIsAvailable(),
                user.getIsVendor(),
                user.getIsMobileVendor()
        );
    }

    public List<User> getUsersByIds(List<Long> ids) {
        return userRepository.findAllById(ids);
    }

    public User getUserByEmail(String email) {
        return userRepository
                .findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "User not found"
                ));
    }

    public List<FavoriteVendorResponse> getFavoriteVendorsById(Long userId) {
        return favoriteVendorRepository.findFavoriteVendors(userId);
    }
}
