import React, { useState } from 'react';
import { RegisterRequest } from '@/features/auth/types/auth';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  Text,
  TextInput,
  Button,
  useTheme
} from 'react-native-paper';

interface RegisterScreenProps {
  onRegister?: (data: RegisterRequest) => void;
  onLogin?: () => void;
}
 
export function RegisterScreen({
  onRegister,
  onLogin,
}: RegisterScreenProps) {
  const { colors } = useTheme();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 
  const handleRegister = () => {
    const data: RegisterRequest = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    onRegister?.(data);
  };
 
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoid}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={[styles.scrollContent, { backgroundColor: colors.background }]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/lion-icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>LEON AMBULANTE</Text>
        </View>
 
        <Text style={styles.title}>
          Únete a la comunidad de compra-venta de CUCEI
        </Text>
 
        <View style={styles.formContainer}>

          <TextInput
            label="Nombre"
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Ingresa tu nombre"
            autoCapitalize="words"
            mode="outlined"
            style={[styles.input, { backgroundColor: colors.surface }]}
            outlineStyle={[styles.inputOutline, { borderColor: colors.outlineVariant }]}
            theme={{ colors: { primary: colors.primary } }}
          />

          <TextInput
            label="Apellido"
            value={lastName}
            onChangeText={setLastName}
            placeholder="Ingresa tu apellido"
            autoCapitalize="words"
            mode="outlined"
            style={[styles.input, { backgroundColor: colors.surface }]}
            outlineStyle={[styles.inputOutline, { borderColor: colors.outlineVariant }]}
            theme={{ colors: { primary: colors.primary } }}
          />
 
          <TextInput
            label="E-mail"
            value={email}
            onChangeText={setEmail}
            placeholder="Ingresa tu e-mail institucional"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            mode="outlined"
            style={[styles.input, { backgroundColor: colors.surface }]}
            outlineStyle={[styles.inputOutline, { borderColor: colors.outlineVariant }]}
            theme={{ colors: { primary: colors.primary } }}
          />
 
          <TextInput
            label="Contraseña"
            value={password}
            onChangeText={setPassword}
            placeholder="Ingresa tu contraseña"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoComplete="new-password"
            mode="outlined"
            style={[styles.input, { backgroundColor: colors.surface }]}
            outlineStyle={[styles.inputOutline, { borderColor: colors.outlineVariant }]}
            theme={{ colors: { primary: colors.primary } }}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye-off' : 'eye'}
                onPress={() => setShowPassword(prev => !prev)}
                color={colors.secondary}
              />
            }
          />
 
          <Text style={[styles.passwordHint, { color: colors.secondary }]}>
            *Debe contener un mínimo de 8 caracteres, letras, números y un símbolo especial.
          </Text>
 
          <TextInput
            label="Reingresa Contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Ingresa nuevamente tu contraseña"
            secureTextEntry={!showConfirmPassword}
            autoCapitalize="none"
            autoComplete="new-password"
            mode="outlined"
            style={[styles.input, { backgroundColor: colors.surface }]}
            outlineStyle={[styles.inputOutline, { borderColor: colors.outlineVariant }]}
            theme={{ colors: { primary: colors.primary } }}
            right={
              <TextInput.Icon
                icon={showConfirmPassword ? 'eye-off' : 'eye'}
                onPress={() => setShowConfirmPassword(prev => !prev)}
                color={colors.secondary}
              />
            }
          />
 
          <Button
            mode="contained"
            onPress={handleRegister}
            style={styles.registerButton}
            contentStyle={styles.registerButtonContent}
            labelStyle={styles.registerButtonLabel}
            buttonColor={colors.primary}
          >
            Regístrate
          </Button>
 
          <View style={styles.loginRow}>
            <Text style={styles.loginText}>¿Ya posees una cuenta? </Text>
            <TouchableOpacity onPress={onLogin} activeOpacity={0.7}>
              <Text style={[styles.loginLink, { color: colors.primary }]}>Inicia sesión.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 140,
    height: 140,
  },
  appName: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 28,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    marginBottom: 12,
  },
  inputOutline: {
    borderRadius: 8,
  },
  passwordHint: {
    fontSize: 11,
    marginTop: -6,
    marginBottom: 12,
    paddingHorizontal: 4,
    lineHeight: 16,
  },
  registerButton: {
    borderRadius: 24,
    marginTop: 8,
    marginBottom: 24,
    elevation: 2,
  },
  registerButtonContent: {
    paddingVertical: 6,
  },
  registerButtonLabel: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 13,
  },
  loginLink: {
    fontSize: 13,
    fontWeight: '600',
  },
});