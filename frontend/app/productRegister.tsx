//import { Text } from "react-native-paper";
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text, IconButton, useTheme, Appbar } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Profile() {
    const router = useRouter();
    const theme = useTheme();

    // Estados para los campos
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('0');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [detalles, setDetalles] = useState('');

    return (
        // <Text variant="displayLarge"> Perfil </Text>
        <View style={styles.container}>
      /* Header con Expo Router */
        <Appbar.Header style={styles.header}>
            <Appbar.BackAction onPress={() => router.back()} />
            <Appbar.Content title="Registro de producto" titleStyle={styles.headerTitle} />
        </Appbar.Header>

        <ScrollView contentContainerStyle={styles.scrollContent}>
            
            /* Selector de Imagen */
            <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.imagePicker}>
                <IconButton icon="upload" size={30} iconColor="#8d2d24" />
            </TouchableOpacity>
            <Text style={styles.imageLabel}>Imagen</Text>
            </View>

            /* Formulario */
            <TextInput
            label="Nombre"
            value={nombre}
            onChangeText={setNombre}
            mode="outlined"
            style={styles.input}
            />

            <TextInput
            label="Precio"
            value={precio}
            onChangeText={setPrecio}
            mode="outlined"
            left={<TextInput.Affix text="$ " />}
            keyboardType="numeric"
            style={styles.input}
            />

            <TextInput
            label="Stock"
            value={stock}
            onChangeText={setStock}
            mode="outlined"
            keyboardType="numeric"
            style={styles.input}
            right={<TextInput.Icon icon="chevron-up" onPress={() => setStock((prev) => (parseInt(prev) + 1).toString())} />}
            // Nota: El icono de abajo se puede simular o usar un componente Stepper dedicado
            />

            <TextInput
            label="Categoría"
            value={categoria}
            mode="outlined"
            placeholder="Selecciona una categoría"
            editable={false}
            right={<TextInput.Icon icon="chevron-down" />}
            onPressIn={() => { /* Abrir Menu o Modal */ }}
            style={styles.input}
            />

            <TextInput
            label="Descripción"
            value={descripcion}
            onChangeText={setDescripcion}
            mode="outlined"
            placeholder="(opcional)"
            multiline
            numberOfLines={4}
            style={styles.input}
            />

            <TextInput
            label="Detalles adicionales"
            value={detalles}
            onChangeText={setDetalles}
            mode="outlined"
            placeholder="(opcional)"
            multiline
            numberOfLines={4}
            style={styles.input}
            />

            /* Botones de Acción */
            <View style={styles.buttonContainer}>
            <Button 
                mode="contained" 
                onPress={() => router.back()} 
                style={[styles.button, styles.exitButton]}
                labelStyle={{ color: '#8d2d24' }}
            >
                Salir
            </Button>
            
            <Button 
                mode="contained" 
                onPress={() => console.log('Guardado')} 
                style={[styles.button, styles.saveButton]}
            >
                Guardar
            </Button>
            </View>

        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    elevation: 0, // Quita sombra en Android
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginRight: 40, // Centrar respecto al icono de atrás
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePicker: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#c07e78',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  imageLabel: {
    fontSize: 12,
    color: '#666',
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 0.48,
    borderRadius: 8,
    paddingVertical: 4,
  },
  exitButton: {
    backgroundColor: '#fbe9e7', // Color rosado claro
    elevation: 0,
  },
  saveButton: {
    backgroundColor: '#d32f2f', // Color rojo intenso
  },
});