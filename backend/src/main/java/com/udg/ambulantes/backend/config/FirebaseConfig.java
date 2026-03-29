package com.udg.ambulantes.backend.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
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
        if (FirebaseApp.getApps().isEmpty()) {
            try {
                String type = System.getenv("FIREBASE_TYPE");
                String projectId = System.getenv("FIREBASE_PROJECT_ID");
                String privateKeyId = System.getenv("FIREBASE_PRIVATE_KEY_ID");
                String privateKey = System.getenv("FIREBASE_PRIVATE_KEY");
                String clientEmail = System.getenv("FIREBASE_CLIENT_EMAIL");
                String clientId = System.getenv("FIREBASE_CLIENT_ID");
                String authURI = System.getenv("FIREBASE_AUTH_URI");
                String tokenURI = System.getenv("FIREBASE_TOKEN_URI");
                String authProvider = System.getenv("FIREBASE_AUTH_PROVIDER_X509_CERT_URL");
                String clientCertURL = System.getenv("FIREBASE_CLIENT_X509_CERT_URL");
                String universeDomain = System.getenv("FIREBASE_UNIVERSE_DOMAIN");

                if (projectId == null || clientEmail == null || privateKey == null) {
                    throw new IllegalStateException("Firebase variables not found in .env");
                }

                String credentialsJson = String.format("""
                    {
                      "type": "%s",
                      "project_id": "%s",
                      "private_key_id": "%s",
                      "client_email": "%s",
                      "client_id": "%s",
                      "auth_uri": "%s",
                      "token_uri": "%s",
                      "auth_provider_x509_cert_url": "%s",
                      "client_x509_cert_url": "%s",
                      "universe_domain": "%s",
                      "private_key": "%s"
                    }
                    """,
                        type, projectId, privateKeyId, clientEmail, clientId,
                        authURI, tokenURI, authProvider, clientCertURL,
                        universeDomain, privateKey.replace("\\n", "\n"));

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
        } else {
            logger.info("Firebase already initialized, skipping");
        }
    }
}