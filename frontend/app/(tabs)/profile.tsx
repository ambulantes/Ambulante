import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar, Text, Avatar, List, Divider, Surface, IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import CustomHeader from '../CustomHeader';

export default function Profile() {
  const router = useRouter();

  return (
    <View style={styles.container}>

     <CustomHeader title={'Mi perfil'} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Avatar.Icon 
              size={160} 
              icon="account" 
              style={styles.avatar} 
              color="#8d2d24"
            />
            <TouchableOpacity style={styles.editButton}>
              <IconButton icon="pencil" iconColor="white" size={20} />
            </TouchableOpacity>
          </View>
          <Text variant="headlineMedium" style={styles.userName}>UserName</Text>
        </View>

        <Surface style={styles.menuContainer} elevation={2}>
          <List.Item
            title="Editar perfil"
            left={props => <List.Icon {...props} icon="pencil-outline" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="Opciones"
            left={props => <List.Icon {...props} icon="cog-outline" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="Mis productos"
            left={props => <List.Icon {...props} icon="shopping-outline" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="Mis ordenes de compra"
            left={props => <List.Icon {...props} icon="paperclip" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="Historial de venta"
            left={props => <List.Icon {...props} icon="clock-outline" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="Preferencias"
            left={props => <List.Icon {...props} icon="format-list-bulleted" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="Acerca de"
            left={props => <List.Icon {...props} icon="information-outline" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="Salir de la cuenta"
            titleStyle={{ color: '#d32f2f' }}
            left={props => <List.Icon {...props} icon="logout" color="#d32f2f" />}
          />
        </Surface>

      </ScrollView>
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
    textAlign: 'center',
    marginRight: 40,
    fontSize: 22,
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  avatar: {
    backgroundColor: '#f8bbd0',
    borderWidth: 2,
    borderColor: '#f8bbd0', 
  },
  editButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#c62828',
    borderRadius: 25,
    elevation: 4,
  },
  userName: {
    fontWeight: '400',
    color: '#000',
  },
  menuContainer: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginBottom: 20,
  },
});