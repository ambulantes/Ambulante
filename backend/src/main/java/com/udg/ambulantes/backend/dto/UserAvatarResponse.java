package com.udg.ambulantes.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UserAvatarResponse {
    private Long id;
    private String imgUrl;
}
