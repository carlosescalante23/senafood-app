import { FloorImage } from '@/components/ui/floor';
import { Image } from 'expo-image';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';

const ACCENT = '#f26522';
const BACKGROUND = '#f7f1e6';
const TEXT = '#0f0f0f';
const DARK_BUTTON = '#20252f';

export default function RegisterScreen() {
  const [showTerms, setShowTerms] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const { width } = useWindowDimensions();
  const isWide = width >= 900;
  const router = useRouter();

  const handleSubmit = () => {
    if (!accepted) {
      
      return;
    }
    
    router.push('/login');
  };

  const handleAccept = () => {
    setAccepted(true);
    setShowTerms(false);
  };

  const handleContinue = () => {
    setAccepted(true);
    setShowTerms(false);
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

          <View style={styles.form}>
            <Text style={styles.label}>Numero de documento</Text>
            <TextInput
              placeholder="Ingresa tu numero de documento"
              placeholderTextColor="#a6a6a6"
              style={styles.input}
              keyboardType="number-pad"
            />

            <Text style={[styles.label, styles.fieldSpacing]}>Nombre completo</Text>
            <TextInput
              placeholder="Ingresa tu nombre completo"
              placeholderTextColor="#a6a6a6"
              style={styles.input}
            />

            <Text style={[styles.label, styles.fieldSpacing]}>Correo electronico</Text>
            <TextInput
              placeholder="Ingresa tu correo"
              placeholderTextColor="#a6a6a6"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={[styles.label, styles.fieldSpacing]}>Contraseña</Text>
            <TextInput
              placeholder="Crea una contraseña"
              placeholderTextColor="#a6a6a6"
              style={styles.input}
              secureTextEntry
            />

            <Pressable style={styles.primaryButton} onPress={handleSubmit}>
              <Text style={styles.primaryButtonText}>Registrarme</Text>
            </Pressable>

            <View style={styles.checkboxContainer}>
              <View style={styles.checkboxRow}>
                <Pressable
                  onPress={() => setAccepted((prev) => !prev)}
                  style={styles.checkboxPressable}
                >
                  <View style={[styles.checkbox, accepted && styles.checkboxChecked]}>
                    {accepted && <Text style={styles.checkboxMark}>✓</Text>}
                  </View>
                </Pressable>
                <View style={styles.checkboxTextContainer}>
                  <Text style={styles.checkboxText}>Aceptar </Text>
                  <Pressable onPress={() => setShowTerms(true)}>
                    <Text style={styles.checkboxLink}>terminos y condiciones</Text>
                  </Pressable>
                </View>
              </View>
            </View>

            <View style={{ alignItems: 'center' }}>
              <Link href="/login" style={styles.bottomLink}>
                ¿Ya tienes una cuenta?
              </Link>
            </View>
          </View>

          <FloorImage />
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal
        visible={showTerms}
        animationType="slide"
        transparent
        statusBarTranslucent
        presentationStyle="overFullScreen"
      >
        <View style={styles.modalOverlay}>
          <ScrollView
            contentContainerStyle={styles.modalScrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <Image
              source={require('@/assets/images/logo.png')}
              contentFit="contain"
              style={styles.modalLogo}
            />
            <View
              style={[
                styles.modalCard,
                { width: isWide ? '92%' : '95%', maxWidth: 600 },
              ]}
            >
              <Text style={styles.modalTermsText}>
                Al acceder y utilizar este sitio web de servicios de comida y domicilios, aceptas los
                presentes Términos, Condiciones y Política de Privacidad. Te pedimos leer
                cuidadosamente este documento, ya que explica el uso permitido del sitio, cómo
                gestionamos los pedidos y cómo protegemos tu información personal. Este documento
                aplica a todos los usuarios que navegan, realizan pedidos o interactúan con nuestra
                plataforma.
              </Text>
              <Pressable style={styles.continueButton} onPress={handleContinue}>
                <Text style={styles.continueButtonText}>Continuar</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </Modal>
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
    fontSize: 15,
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
  checkboxContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  checkboxRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    maxWidth: '90%',
  },
  checkboxPressable: {
    justifyContent: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: ACCENT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: ACCENT,
  },
  checkboxMark: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 12,
  },
  checkboxTextContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    flex: 1,
  },
  checkboxText: {
    fontSize: 14,
    color: TEXT,
  },
  checkboxLink: {
    fontSize: 14,
    color: ACCENT,
    textDecorationLine: 'underline',
  },
  bottomLink: {
    color: ACCENT,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop: 24,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: BACKGROUND,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 28,
  },
  modalScrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  modalLogo: {
    width: 210,
    height: 120,
    marginBottom: 20,
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    alignSelf: 'center',
  },
  modalTermsText: {
    color: TEXT,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
    textAlign: 'left',
  },
  continueButton: {
    backgroundColor: ACCENT,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    width: '100%',
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
