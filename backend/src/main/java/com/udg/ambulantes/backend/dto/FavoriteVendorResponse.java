package com.udg.ambulantes.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class FavoriteVendorResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String imgUrl;
    private Boolean isAvailable;
}
