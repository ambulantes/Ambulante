import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Divider } from 'react-native-paper';

interface ProductProps{
    id: string;
    nombre: string;
    precio: string;
    stock: string;
    image: string;
}

const Product = ({id, nombre, precio, stock, image }: ProductProps) =>{
    return (
        <View>
         <View style={styles.productRow}>
           {/* Imagen del producto */}
           <Image source={{ uri: image }} style={styles.productImage} />
   
           {/* Nombre */}
           <View style={styles.columnNombre}>
             <Text variant="bodyMedium" style={styles.cellText}>{nombre}</Text>
           </View>
   
           {/* Precio */}
           <View style={styles.columnPrecio}>
             <Text variant="bodyLarge" style={styles.priceText}>
               <Text style={styles.currencySymbol}>$ </Text>{precio}
             </Text>
           </View>
   
           {/* Stock */}
           <View style={styles.columnStock}>
             <Text variant="bodyLarge" style={styles.stockText}>{stock}</Text>
           </View>
         </View>
         <Divider style={styles.rowDivider} />
       </View>
    )
}

const styles = StyleSheet.create({
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

export default Product;