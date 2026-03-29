import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text, Surface, Divider, Button, IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetallePedido() {
  const router = useRouter();

  // Datos de ejemplo
  const productos = [
    { id: '1', nombre: 'Enfrijoladas con pollo', cantidad: 9, total: '250.00', img: 'https://via.placeholder.com/60' },
    { id: '2', nombre: 'Enfrijoladas con pollo', cantidad: 9, total: '250.00', img: 'https://via.placeholder.com/60' },
    { id: '3', nombre: 'Enfrijoladas con pollo', cantidad: 9, total: '250.00', img: 'https://via.placeholder.com/60' },
    { id: '4', nombre: 'Enfrijoladas', cantidad: 9, total: '250.00', img: 'https://via.placeholder.com/60' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header Minimalista Custom */}
      <View style={styles.customHeader}>
        <IconButton 
          icon="arrow-left" 
          size={24} 
          onPress={() => router.back()} 
        />
        <Text variant="titleLarge" style={styles.headerTitle}>Detalle del pedido</Text>
        <View style={{ width: 48 }} /> 
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Tarjeta de Productos */}
        <Surface style={styles.card} elevation={2}>
          <View style={styles.tableHeader}>
            <Text style={[styles.headerLabel, { flex: 2 }]}>Producto</Text>
            <Text style={[styles.headerLabel, { flex: 1, textAlign: 'center' }]}>Cantidad</Text>
            <Text style={[styles.headerLabel, { flex: 1, textAlign: 'right' }]}>Total</Text>
          </View>

          {productos.map((item) => (
            <View key={item.id} style={styles.productRow}>
              <View style={styles.productInfo}>
                <Image source={{ uri: item.img }} style={styles.productImage} />
                <Text style={styles.productName}>{item.nombre}</Text>
              </View>
              <Text style={styles.quantityText}>{item.cantidad}</Text>
              <Text style={styles.rowTotal}>$ {item.total}</Text>
            </View>
          ))}

          <Divider style={styles.divider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total de productos:</Text>
            <Text style={styles.totalAmount}>$ 1580.00</Text>
          </View>
        </Surface>

        {/* Tarjeta de Método de Recogida */}
        <Surface style={styles.card} elevation={2}>
          <Text variant="titleMedium" style={styles.infoTitle}>Método de recogida</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Acuerdo:</Text>
            <Text style={styles.infoValue}>Vendedor fue a entregar</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Fecha de Entrega:</Text>
            <Text style={styles.infoValue}>08/02/2026</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Lugar de recogida:</Text>
            <Text style={styles.infoValue}>Modulo R (Puestos)</Text>
          </View>
        </Surface>

        {/* Botón de acción inferior */}
        <Button 
          mode="contained" 
          onPress={() => console.log('Volver a comprar')}
          style={styles.actionButton}
          labelStyle={styles.actionButtonLabel}
        >
          Volver a Comprar
        </Button>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: 8,
  },
  headerTitle: {
    fontWeight: '500',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  headerLabel: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 15,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  productInfo: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  productName: {
    fontSize: 12,
    flexShrink: 1,
    color: '#333',
  },
  quantityText: {
    flex: 1,
    textAlign: 'center',
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  rowTotal: {
    flex: 1,
    textAlign: 'right',
    color: '#d32f2f',
    fontSize: 13,
  },
  divider: {
    marginVertical: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  totalAmount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#d32f2f',
  },
  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#000',
  },
  infoValue: {
    color: '#333',
    flex: 1,
    textAlign: 'right',
  },
  actionButton: {
    backgroundColor: '#d32f2f',
    borderRadius: 8,
    marginTop: 20,
    paddingVertical: 4,
  },
  actionButtonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});