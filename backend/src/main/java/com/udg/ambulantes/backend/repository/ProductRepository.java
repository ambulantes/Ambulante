package com.udg.ambulantes.backend.repository;

import com.udg.ambulantes.backend.dto.HomeProductResponse;
import com.udg.ambulantes.backend.model.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("""
           SELECT new com.udg.ambulantes.backend.dto.HomeProductResponse(
            p.id,
            p.name,
            p.price,
            p.imgUrl,
            new com.udg.ambulantes.backend.dto.UserAvatarResponse(
                u.id,
                u.imgUrl
            )
           )
           FROM Product p
           JOIN p.vendor u
           WHERE u.isAvailable = true
           ORDER BY function('RANDOM')
           """
    )
    List<HomeProductResponse> findRandomProducts(Pageable pageable);
}
