import React, { useState } from 'react';
import { LoginRequest } from '../types/auth';
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
  Checkbox,
  useTheme
} from 'react-native-paper';

interface LoginScreenProps {
  onLogin?: (data: LoginRequest) => void;
  onForgotPassword?: () => void;
  onRegister?: () => void;
}

export function LoginScreen({
  onLogin,
  onForgotPassword,
  onRegister,
}: LoginScreenProps) {
  const { colors } = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [rememberCredentials, setRememberCredentials] = useState(false);

  const handleLogin = () => {
    const data: LoginRequest = {
      email,
      password,
    };
    if (data.email.trim() === '' || data.password.trim() === '') {
      console.warn('Por favor, completa todos los campos.');
      return;
    }
    onLogin?.(data);
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoid}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.logoContainer, { backgroundColor: colors.background}]}>
          <Image
            source={require('@/assets/images/lion-icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>LEON AMBULANTE</Text>
        </View>

        <View style={styles.formContainer}>

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
            autoComplete="password"
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

          <TouchableOpacity
            onPress={onForgotPassword}
            style={styles.forgotContainer}
            activeOpacity={0.7}
          >
            <Text style={[styles.forgotText, { color: colors.primary }]}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rememberRow}
            onPress={() => setRememberCredentials(prev => !prev)}
            activeOpacity={0.7}
          >
            <Checkbox
              status={rememberCredentials ? 'checked' : 'unchecked'}
              onPress={() => setRememberCredentials(prev => !prev)}
              color={colors.primary}
            />
            <Text style={styles.rememberText}>Recordar credenciales</Text>
          </TouchableOpacity>

          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.loginButton}
            contentStyle={styles.loginButtonContent}
            labelStyle={styles.loginButtonLabel}
            buttonColor={colors.primary}
          >
            Ingresar
          </Button>

          <View style={styles.registerRow}>
            <Text style={[styles.registerText, { color: colors.secondary }]}>¿No tienes cuenta? </Text>
            <TouchableOpacity onPress={onRegister} activeOpacity={0.7}>
              <Text style={[styles.registerLink, { color: colors.primary }]}>Regístrate aquí.</Text>
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
    paddingTop: 48,
    paddingBottom: 40,
    justifyContent: 'center',
  },

  // Logo
  logoContainer: {
    alignItems: 'center',
    marginBottom: 36,
  },
  logo: {
    width: 180,
    height: 180,
  },
  appName: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 12,
  },

  // Formulario
  formContainer: {
    width: '100%',
  },
  input: {
    marginBottom: 12,
  },
  inputOutline: {
    borderRadius: 8,
  },

  // ¿Olvidaste tu contraseña?
  forgotContainer: {
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  forgotText: {
    fontSize: 13,
    fontWeight: '500',
  },

  // Recordar credenciales
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  rememberText: {
    fontSize: 14,
    marginLeft: 4,
  },

  // Botón ingresar
  loginButton: {
    borderRadius: 24,
    marginBottom: 24,
    elevation: 2,
  },
  loginButtonContent: {
    paddingVertical: 6,
  },
  loginButtonLabel: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  // ¿No tienes cuenta?
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 13,
  },
  registerLink: {
    fontSize: 13,
    fontWeight: '600',
  },
});