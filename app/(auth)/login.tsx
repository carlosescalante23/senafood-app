import { FloorImage } from '@/components/ui/floor';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
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
const LINK_BLUE = '#4a68ff';

export default function LoginScreen() {
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

          <View style={styles.form}>
            <Text style={styles.label}>Correo electronico</Text>
            <TextInput
              placeholder="Ingresa tu correo"
              placeholderTextColor="#a6a6a6"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={[styles.label, styles.fieldSpacing]}>Contraseña</Text>
            <TextInput
              placeholder="Ingrese su contraseña"
              placeholderTextColor="#a6a6a6"
              secureTextEntry
              style={styles.input}
            />

            <Pressable style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Iniciar sesion</Text>
            </Pressable>

            <Text style={styles.inlineText}>
              ¿No tienes cuenta?{' '}
              <Link href="/register" style={styles.link}>
                registrate
              </Link>
            </Text>

            <Link href="/recuperarcontra" style={[styles.inlineText, styles.link]}>
              ¿Has olvidado tu contraseña?
            </Link>
          </View>

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
  },
  label: {
    color: TEXT,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  fieldSpacing: {
    marginTop: 18,
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
    marginTop: 28,
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
    marginTop: 18,
    fontSize: 15,
  },
  link: {
    color: LINK_BLUE,
    fontWeight: '600',
  },
});
