package com.udg.ambulantes.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.Map;

@Entity
@Table(name = "users")
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(name = "img_url")
    private String imgUrl;

    private String description;

    @Column(name = "is_available")
    private Boolean isAvailable = true;

    @Column(name = "avg_score", precision = 3, scale = 2)
    private BigDecimal avgScore = BigDecimal.ZERO;

    @Column(name = "reviews_count")
    private Integer reviewsCount = 0;

    @CreatedDate
    @Column(name = "created_at")
    private Instant createdAt;

    @Column(name = "is_vendor")
    private Boolean isVendor = false;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "working_hours")
    private Map<String, List<WorkingPeriod>> workingHours;

    @Column(name = "is_mobile_vendor")
    private Boolean isMobileVendor;

    @OneToMany(mappedBy = "user")
    private List<FavoriteVendor> favoriteVendors;
}
