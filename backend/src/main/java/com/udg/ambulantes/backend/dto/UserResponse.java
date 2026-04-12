package com.udg.ambulantes.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String imgUrl;
    private Boolean isAvailable;
    private Boolean isVendor;
    private Boolean isMobileVendor;
}
