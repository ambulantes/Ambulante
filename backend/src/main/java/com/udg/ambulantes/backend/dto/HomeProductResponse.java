package com.udg.ambulantes.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.math.BigDecimal;

@AllArgsConstructor
@Getter
public class HomeProductResponse {
    private Long id;
    private String name;
    private BigDecimal price;
    private String imgUrl;

    private UserAvatarResponse vendor;
}
