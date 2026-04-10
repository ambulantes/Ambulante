package com.udg.ambulantes.backend.repository;

import com.udg.ambulantes.backend.dto.HomeCategoryResponse;
import com.udg.ambulantes.backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query("""
            SELECT new com.udg.ambulantes.backend.dto.HomeCategoryResponse(
                c.id,
                c.name
            )
            FROM Category c
            ORDER BY c.id ASC
            """)
    List<HomeCategoryResponse> findAllCategories();
}
