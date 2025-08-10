import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function Index() {
  const [mensaje, setMensaje] = useState("Presiona el botón para probar");
  const [loading, setLoading] = useState(false);

  const probarConexion = async () => {
    setLoading(true);
    setMensaje("Conectando...");
    
    try {
      console.log("Iniciando fetch...");
      
      const response = await fetch("http://192.168.100.35:8080/hello", {
        method: 'GET',
        headers: {
          'Accept': 'text/plain',
          'Content-Type': 'text/plain',
        },
        timeout: 10000, // 10 segundos timeout
      });
      
      console.log("Response recibido:", response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.text();
      console.log("Data:", data);
      setMensaje(data);
      
    } catch (error) {
      console.error("Error completo:", error);
      setMensaje(`Error: ${error.message}`);
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{mensaje}</Text>
      
      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={probarConexion}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Conectando..." : "Probar Conexión"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    minHeight: 80,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
