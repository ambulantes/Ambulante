package com.udg.ambulantes.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class AmbulanteApplication {

	public static void main(String[] args) {
		SpringApplication.run(AmbulanteApplication.class, args);
	}

}
