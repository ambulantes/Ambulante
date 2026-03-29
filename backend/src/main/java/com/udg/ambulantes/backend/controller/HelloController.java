package com.udg.ambulantes.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/hello")
    public String hello() {
        try {
            String username = jdbcTemplate.queryForObject(
                    "SELECT username FROM users WHERE id = ?",
                    String.class,
                    1
            );
            return "Hola " + username + ", esto es hot reload!";
        } catch (Exception e) {
            return "Hola usuario, bienvenido desde hot reload! (Usuario no encontrado)";
        }
    }
}
