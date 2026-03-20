//import { Text } from "react-native-paper";
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text, IconButton, useTheme, Appbar } from 'react-native-paper';
import { useRouter } from 'expo-router';
import ProductForm from './ProductForm';

export default function Profile() {
    const router = useRouter();
    const theme = useTheme();

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
            <ProductForm/>

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
    elevation: 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginRight: 40, 
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
    backgroundColor: '#fbe9e7',
    elevation: 0,
  },
  saveButton: {
    backgroundColor: '#d32f2f',
  },
});
