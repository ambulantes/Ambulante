import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { AppButton } from "@/src/components/AppButton";

export default function Index() {
  const { colors } = useTheme();

  const [mensaje, setMensaje] = useState("Presiona el botón para probar");
  const [loading, setLoading] = useState(false);

  const probarConexion = async () => {
    setLoading(true);
    setMensaje("Conectando...");

    try {
      const response = await fetch("http://192.168.100.35:8080/hello");
      const data = await response.text();
      setMensaje(data);
    } catch (error: any) {
      setMensaje(`Error: ${error.message}`);
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="bodyLarge" style={styles.text}>
        {mensaje}
      </Text>

      <Button
        mode="contained"
        loading={loading}
        buttonColor={colors.primary}
        onPress={probarConexion}
      >
        {loading ? "Conectando..." : "Probar Conexión"}
      </Button>

      <AppButton>Primario</AppButton>

      <AppButton variant="secondary" mode="outlined">
        Secundario
      </AppButton>

      <AppButton variant="danger">
        Danger
      </AppButton>

      <AppButton loading>
        Cargando...
      </AppButton>

      <AppButton disabled>
        Deshabilitado
      </AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  text: {
    marginBottom: 20,
    textAlign: "center",
  },
});
