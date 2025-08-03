package com.udg.ambulantes.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // CSRF OFF para dev
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // Permitir todo
                )
                .formLogin(form -> form.disable()) // Desactivar login por formulario
                .httpBasic(httpBasic -> httpBasic.disable()); // Desactivar auth básica

        return http.build();
    }
}

