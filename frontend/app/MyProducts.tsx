import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Appbar, Text, Divider } from 'react-native-paper';
import { useRouter } from 'expo-router';
import SuperiorFilter from './SuperiorFilter';
import Product from './Product';

// Datos de ejemplo
const PRODUCTOS = [
  { id: '1', nombre: 'Enfrijoladas con pollo', precio: '250', stock: '5', image: 'https://via.placeholder.com/60' },
  { id: '2', nombre: 'Enfrijoladas con pollo', precio: '250', stock: '5', image: 'https://via.placeholder.com/60' },
  { id: '3', nombre: 'Enfrijoladas con pollo', precio: '250', stock: '5', image: 'https://via.placeholder.com/60' },
  { id: '4', nombre: 'Enfrijoladas con pollo', precio: '250', stock: '5', image: 'https://via.placeholder.com/60' },
];

export default function MisProductos() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <Product id={item.id}  nombre={item.nombre} precio={item.precio} stock={item.stock} image={item.image}/>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Mis Productos" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      {/* Filtros Superiores */}
      <SuperiorFilter/>

      <Divider />

      {/* Encabezado de Tabla */}
      <View style={styles.tableHeader}>
        <View style={styles.columnImagePlaceholder} />
        <Text style={[styles.headerLabel, styles.columnNombre]}>Nombre</Text>
        <Text style={[styles.headerLabel, styles.columnPrecio]}>Precio</Text>
        <Text style={[styles.headerLabel, styles.columnStock]}>Stock</Text>
      </View>

      {/* Lista de Productos */}
      <FlatList
        data={PRODUCTOS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
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
  tableHeader: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  headerLabel: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  listPadding: {
    paddingHorizontal: 16,
  },
  columnImagePlaceholder: {
    width: 70,
  },
  columnNombre: {
    flex: 2,
    paddingHorizontal: 10,
  },
  columnPrecio: {
    flex: 1,
    alignItems: 'center',
  },
  columnStock: {
    flex: 0.8,
    alignItems: 'center',
  },
});
