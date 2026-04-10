package com.udg.ambulantes.backend.repository;

import com.udg.ambulantes.backend.dto.FavoriteVendorResponse;
import com.udg.ambulantes.backend.model.FavoriteVendor;
import com.udg.ambulantes.backend.model.FavoriteVendorId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoriteVendorRepository extends JpaRepository<FavoriteVendor, FavoriteVendorId> {
    @Query("""
        SELECT new com.udg.ambulantes.backend.dto.FavoriteVendorResponse(
            u.id,
            u.firstName,
            u.lastName,
            u.imgUrl,
            u.isAvailable
        )
        FROM FavoriteVendor f
        JOIN f.vendor u
        WHERE f.user.id = :userId
        ORDER BY u.isAvailable DESC, u.firstName ASC, u.lastName ASC
        """)
    List<FavoriteVendorResponse> findFavoriteVendors(Long userId);
}
