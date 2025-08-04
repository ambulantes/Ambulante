package com.udg.ambulantes.backend.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import io.github.cdimascio.dotenv.Dotenv;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;

import java.io.ByteArrayInputStream;
import java.io.IOException;

@Configuration
public class FirebaseConfig {

    private static final Logger logger = LoggerFactory.getLogger(FirebaseConfig.class);

    @PostConstruct
    public void initialize() {
        try {
            Dotenv dotenv = Dotenv.configure()
                    .directory("./")
                    .load();

            // Read variables from .env
            String projectId = dotenv.get("FIREBASE_PROJECT_ID");
            String clientEmail = dotenv.get("FIREBASE_CLIENT_EMAIL");
            String privateKey = dotenv.get("FIREBASE_PRIVATE_KEY");

            if (projectId == null || clientEmail == null || privateKey == null) {
                throw new IllegalStateException("Firebase variables not found in .env");
            }

            // Create JSON in memory
            String credentialsJson = String.format("""
                {
                  "type": "service_account",
                  "project_id": "%s",
                  "client_email": "%s",
                  "private_key": "%s"
                }
                """, projectId, clientEmail, privateKey.replace("\\n", "\n"));

            GoogleCredentials credentials = GoogleCredentials
                    .fromStream(new ByteArrayInputStream(credentialsJson.getBytes()));

            FirebaseOptions options = FirebaseOptions.builder()
                    .setCredentials(credentials)
                    .setProjectId(projectId)
                    .build();

            FirebaseApp.initializeApp(options);

            logger.info("Firebase started successfully");

        } catch (IOException e) {
            logger.error("Error when trying to start Firebase: {}", e.getMessage(), e);
            throw new RuntimeException("Firebase start failed", e);
        }
    }
}
