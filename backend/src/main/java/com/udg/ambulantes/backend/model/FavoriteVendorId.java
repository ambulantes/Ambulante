package com.udg.ambulantes.backend.model;

import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;

@Embeddable
@Data
public class FavoriteVendorId implements Serializable {
    private Long userId;
    private Long vendorId;
}
