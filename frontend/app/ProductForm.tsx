import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';


export default function ProductForm(){
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('0');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [detalles, setDetalles] = useState('');

    return (
        <View>
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

            </View>
    )
}


const styles = StyleSheet.create({
    input: {
    marginBottom: 16,
    backgroundColor: '#fff',
  }
});