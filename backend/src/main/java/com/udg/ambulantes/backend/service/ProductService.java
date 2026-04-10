package com.udg.ambulantes.backend.service;

import com.udg.ambulantes.backend.dto.HomeProductResponse;
import com.udg.ambulantes.backend.repository.ProductRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<HomeProductResponse> getRandomProducts(Pageable pageable) {
        return productRepository.findRandomProducts(pageable);
    }
}
