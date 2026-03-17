import React from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Appbar, Text, Divider, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    <View>
      <View style={styles.productRow}>
        {/* Imagen del producto */}
        <Image source={{ uri: item.image }} style={styles.productImage} />

        {/* Nombre */}
        <View style={styles.columnNombre}>
          <Text variant="bodyMedium" style={styles.cellText}>{item.nombre}</Text>
        </View>

        {/* Precio */}
        <View style={styles.columnPrecio}>
          <Text variant="bodyLarge" style={styles.priceText}>
            <Text style={styles.currencySymbol}>$ </Text>{item.precio}
          </Text>
        </View>

        {/* Stock */}
        <View style={styles.columnStock}>
          <Text variant="bodyLarge" style={styles.stockText}>{item.stock}</Text>
        </View>
      </View>
      <Divider style={styles.rowDivider} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Mis Productos" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      {/* Filtros Superiores */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Categoría</Text>
          <MaterialCommunityIcons name="menu-right" size={24} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>
          <Text style={[styles.filterText, { textAlign: 'right' }]}>
            Cantidad de{"\n"}Stock
          </Text>
          <MaterialCommunityIcons name="menu-right" size={24} color="#555" />
        </TouchableOpacity>
      </View>

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
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    justifyContent: 'space-between',
  },
  filterText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 18,
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
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  productImage: {
    width: 70,
    height: 60,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
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
  cellText: {
    fontSize: 13,
    color: '#444',
  },
  priceText: {
    color: '#d32f2f', // Rojo consistente
    fontWeight: 'bold',
  },
  currencySymbol: {
    fontSize: 16,
  },
  stockText: {
    fontWeight: 'bold',
    color: '#333',
  },
  rowDivider: {
    backgroundColor: '#e0e0e0',
  },
});