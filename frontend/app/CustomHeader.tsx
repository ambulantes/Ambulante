import { View, StyleSheet } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const CustomHeader = ({ title }) => {
  const router = useRouter();
  
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <IconButton 
          icon="arrow-left" 
          size={24} 
          onPress={() => router.back()} 
          style={styles.backButton}
        />
        <Text variant="titleMedium" style={styles.title}>{title}</Text>
        <View style={{ width: 48 }} /> 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 8,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
  },
});

export default CustomHeader;