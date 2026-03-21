import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SuperiorFilter(){
    return(
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
    )

}

const styles = StyleSheet.create({
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
});