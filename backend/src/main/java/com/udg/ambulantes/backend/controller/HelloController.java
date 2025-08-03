package com.udg.ambulantes.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

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
                    1  // ID del usuario que quieres
            );
            return "Hola " + username + ", bienvenido!";
        } catch (Exception e) {
            return "Hola usuario, bienvenido! (Usuario no encontrado)";
        }
    }
}
