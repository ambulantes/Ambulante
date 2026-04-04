package com.udg.ambulantes.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "favorites")
public class FavoriteVendor {
    @EmbeddedId
    private FavoriteVendorId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("vendorId")
    @JoinColumn(name = "vendor_id")
    private User vendor;
}
