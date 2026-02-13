import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, FONTS } from '../constants/theme';

export function Cadastro() {
  const router = useRouter();
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCadastro = async () => {
    if (!nomeCompleto.trim() || !email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.replace('/(tabs)');
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.iconWrapper}>
              <Ionicons name="people-outline" size={40} color="#FFF" />
            </View>
            <Text style={styles.title}>Crie sua conta</Text>
            <Text style={styles.subtitle}>Gerencie suas finanças</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Nome Completo</Text>
              <TextInput
                style={styles.input}
                placeholder="Seu nome completo"
                placeholderTextColor={COLORS.textSecondary}
                value={nomeCompleto}
                onChangeText={setNomeCompleto}
                autoCapitalize="words"
                autoComplete="name"
              />
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="Seu@email.com"
                placeholderTextColor={COLORS.textSecondary}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Senha</Text>
              <View style={styles.passwordWrapper}>
                <TextInput
                  style={[styles.input, styles.inputInWrapper]}
                  placeholder="••••••••"
                  placeholderTextColor={COLORS.textSecondary}
                  value={senha}
                  onChangeText={setSenha}
                  secureTextEntry={!showSenha}
                  autoCapitalize="none"
                  autoComplete="new-password"
                />
                <TouchableOpacity
                  onPress={() => setShowSenha(!showSenha)}
                  style={styles.eyeIcon}
                  hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                >
                  <Ionicons
                    name={showSenha ? 'eye-outline' : 'eye-off-outline'}
                    size={22}
                    color={COLORS.textSecondary}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Confirmar senha</Text>
              <View style={styles.passwordWrapper}>
                <TextInput
                  style={[styles.input, styles.inputInWrapper]}
                  placeholder="••••••••"
                  placeholderTextColor={COLORS.textSecondary}
                  value={confirmarSenha}
                  onChangeText={setConfirmarSenha}
                  secureTextEntry={!showConfirmar}
                  autoCapitalize="none"
                  autoComplete="new-password"
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmar(!showConfirmar)}
                  style={styles.eyeIcon}
                  hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                >
                  <Ionicons
                    name={showConfirmar ? 'eye-outline' : 'eye-off-outline'}
                    size={22}
                    color={COLORS.textSecondary}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.primaryButton, isLoading && styles.primaryButtonDisabled]}
              onPress={handleCadastro}
              disabled={isLoading}
              activeOpacity={0.85}
            >
              <Text style={styles.primaryButtonText}>
                {isLoading ? 'Cadastrando...' : 'Cadastrar'}
              </Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Já tem uma conta? </Text>
              <TouchableOpacity onPress={() => router.replace('/login')} activeOpacity={0.7}>
                <Text style={styles.footerLink}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: SPACING.l,
    paddingVertical: SPACING.xl * 2,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.xl * 1.5,
  },
  iconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.l,
    elevation: 4,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.secondary,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: FONTS.sizeBody,
    color: COLORS.textSecondary,
  },
  form: {
    width: '100%',
  },
  fieldGroup: {
    marginBottom: SPACING.l,
  },
  label: {
    fontSize: FONTS.sizeBody,
    fontWeight: '600',
    color: COLORS.secondary,
    marginBottom: SPACING.s,
  },
  input: {
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingHorizontal: SPACING.m,
    paddingVertical: 14,
    fontSize: FONTS.sizeBody,
    color: COLORS.textPrimary,
  },
  inputInWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingRight: 0,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingRight: SPACING.s,
  },
  eyeIcon: {
    padding: SPACING.s,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: SPACING.m,
    marginBottom: SPACING.xl,
    elevation: 4,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  primaryButtonDisabled: {
    opacity: 0.7,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: FONTS.sizeSection,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  footerText: {
    fontSize: FONTS.sizeBody,
    color: COLORS.textSecondary,
  },
  footerLink: {
    fontSize: FONTS.sizeBody,
    color: COLORS.primary,
    fontWeight: '600',
  },
});
