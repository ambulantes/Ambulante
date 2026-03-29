import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Appbar, Text, Avatar, Divider } from 'react-native-paper';
import { useRouter } from 'expo-router';
import SuperiorFilter from './SuperiorFilter';

const DATA = Array(6).fill({
  id: Math.random().toString(),
  fecha: '12/01/2026',
  estado: 'Entregado',
  cantidad: '5 Productos',
  precio: '1580.00',
});

export default function HistorialScreen() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View style={styles.itemWrapper}>
      {/* Etiqueta de Fecha */}
      <Text style={styles.dateLabel}>{item.fecha}</Text>
      <Divider style={styles.topDivider} />

      <View style={styles.contentRow}>
        <Avatar.Image 
          size={70} 
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.productThumbnail}
        />

        <View style={styles.infoColumn}>
          <Text variant="titleMedium" style={styles.statusText}>{item.estado}</Text>
          <Text variant="bodyMedium" style={styles.countText}>{item.cantidad}</Text>
          <Text variant="titleMedium" style={styles.priceText}>$ {item.precio}</Text>
        </View>

        <Avatar.Image 
          size={45} 
          source={{ uri: 'https://i.pravatar.cc/100' }} 
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Historial" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      <SuperiorFilter/>
      <Divider />

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
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
    fontSize: 22,
    textAlign: 'center',
    marginRight: 40, 
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  filterOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 16,
    marginRight: 40,
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  itemWrapper: {
    marginTop: 15,
  },
  dateLabel: {
    fontSize: 13,
    color: '#666',
    marginBottom: 5,
  },
  topDivider: {
    marginBottom: 10,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productThumbnail: {
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  infoColumn: {
    flex: 1,
    marginLeft: 15,
  },
  statusText: {
    fontWeight: 'bold',
  },
  countText: {
    color: '#333',
    marginVertical: 2,
  },
  priceText: {
    color: '#d32f2f', 
    fontWeight: 'bold',
  },
});