package com.udg.ambulantes.backend.service;

import com.udg.ambulantes.backend.dto.FavoriteVendorResponse;
import com.udg.ambulantes.backend.model.User;
import com.udg.ambulantes.backend.repository.FavoriteVendorRepository;
import com.udg.ambulantes.backend.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final FavoriteVendorRepository favoriteVendorRepository;

    public UserService(UserRepository userRepository, FavoriteVendorRepository favoriteVendorRepository) {
        this.userRepository = userRepository;
        this.favoriteVendorRepository = favoriteVendorRepository;
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
