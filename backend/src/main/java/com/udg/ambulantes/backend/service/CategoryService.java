package com.udg.ambulantes.backend.service;

import com.udg.ambulantes.backend.dto.HomeCategoryResponse;
import com.udg.ambulantes.backend.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<HomeCategoryResponse> getCategories() {
        return categoryRepository.findAllCategories();
    }
}
