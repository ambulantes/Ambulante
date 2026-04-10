package com.udg.ambulantes.backend.controller;

import com.udg.ambulantes.backend.dto.HomeProductResponse;
import com.udg.ambulantes.backend.service.ProductService;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/random")
    public List<HomeProductResponse> getRandomProducts() {
        return productService.getRandomProducts(PageRequest.of(0, 4));
    }
}
