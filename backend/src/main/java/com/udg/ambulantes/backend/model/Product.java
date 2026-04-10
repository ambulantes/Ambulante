package com.udg.ambulantes.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Table(name = "products")
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vendor_id")
    private User vendor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    private String name;

    private String description;

    private String details;

    @Column(nullable = false, precision = 3, scale = 2)
    private BigDecimal price;

    @Column(name = "img_url")
    private String imgUrl;

    private Integer stock = 0;

    @Column(name = "is_active")
    private Boolean isActive = false;

    @CreatedDate
    @Column(name = "created_at")
    private Instant createdAt;
}
