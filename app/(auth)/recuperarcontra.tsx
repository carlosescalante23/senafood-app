import { FloorImage } from '@/components/ui/floor';
import { Image } from 'expo-image';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const ACCENT = '#f26522';
const BACKGROUND = '#f7f1e6';
const TEXT = '#0f0f0f';

type Step = 'request' | 'sent' | 'reset' | 'success';

export default function RecuperarContraScreen() {
  const [step, setStep] = useState<Step>('request');
  const router = useRouter();

  const goToLogin = () => router.push('/login');

  const renderRequest = () => (
    <View style={styles.form}>
      <Text style={styles.label}>Ingrese su correo electronico</Text>
      <TextInput
        placeholder="Ingresa tu correo/Documento"
        placeholderTextColor="#a6a6a6"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Pressable style={styles.primaryButton} onPress={() => setStep('sent')}>
        <Text style={styles.primaryButtonText}>Enviar enlace</Text>
      </Pressable>

      <Link href="/login" style={styles.inlineText}>
        Volver al inicio de sesion
      </Link>
    </View>
  );

  const renderSent = () => (
    <View style={styles.card}>
      <Image source={require('@/assets/images/mail.png')} style={styles.cardIcon} contentFit="contain" />
      <Text style={styles.cardText}>
        Hemos enviado un enlace de recuperacion a tu correo electronico. Revisa tu bandeja de entrada o carpeta de spam
        para continuar con el proceso.
      </Text>
      <Pressable style={styles.primaryButton} onPress={() => setStep('reset')}>
        <Text style={styles.primaryButtonText}>Continuar</Text>
      </Pressable>
    </View>
  );

  const renderReset = () => (
    <View style={styles.form}>
      <Text style={styles.label}>Nueva contrasena</Text>
      <TextInput
        placeholder="Ingrese su contrasena"
        placeholderTextColor="#a6a6a6"
        style={styles.input}
        secureTextEntry
      />

      <Text style={[styles.label, styles.fieldSpacing]}>Confirmar contrasena</Text>
      <TextInput
        placeholder="Ingrese su contrasena"
        placeholderTextColor="#a6a6a6"
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.primaryButton} onPress={() => setStep('success')}>
        <Text style={styles.primaryButtonText}>Restablecer contrasena</Text>
      </Pressable>
    </View>
  );

  const renderSuccess = () => (
    <View style={styles.card}>
      <Image source={require('@/assets/images/check.png')} style={styles.successIcon} contentFit="contain" />
      <Text style={styles.cardText}>Contrasena actualizada exitosamente</Text>
      <Pressable style={styles.primaryButton} onPress={goToLogin}>
        <Text style={styles.primaryButtonText}>Continuar</Text>
      </Pressable>
    </View>
  );

  const renderByStep = () => {
    switch (step) {
      case 'sent':
        return renderSent();
      case 'reset':
        return renderReset();
      case 'success':
        return renderSuccess();
      default:
        return renderRequest();
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', default: undefined })}
        style={styles.flex}
      >
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Image
            source={require('@/assets/images/logo.png')}
            contentFit="contain"
            style={styles.logo}
          />

          {renderByStep()}

          <FloorImage />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  flex: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 20,
    paddingBottom: 0,
    backgroundColor: BACKGROUND,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 210,
    height: 120,
    marginTop: 8,
  },
  form: {
    width: '100%',
    marginTop: 8,
    gap: 16,
  },
  label: {
    color: TEXT,
    fontSize: 16,
    fontWeight: '600',
  },
  fieldSpacing: {
    marginTop: 4,
  },
  input: {
    borderColor: ACCENT,
    borderWidth: 1.4,
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    color: TEXT,
    backgroundColor: '#fff',
  },
  primaryButton: {
    marginTop: 10,
    backgroundColor: ACCENT,
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  inlineText: {
    textAlign: 'center',
    color: '#5f7eff',
    marginTop: 14,
    fontSize: 15,
    fontWeight: '600',
  },
  card: {
    width: '95%',
    maxWidth: 500,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 18,
    alignItems: 'center',
    gap: 14,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 8,
    marginTop: 16,
  },
  cardIcon: {
    width: 70,
    height: 70,
  },
  successIcon: {
    width: 80,
    height: 80,
  },
  cardText: {
    color: TEXT,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
});
