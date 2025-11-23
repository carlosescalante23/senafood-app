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
                { width: isWide ? '92%' : '95%', maxWidth: 800 },
              ]}
            >
              <Text style={styles.modalTitle}>Términos y Condiciones</Text>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Aceptación de los términos</Text>
                <Text style={styles.sectionText}>
                  Al utilizar SENAFOOD, aceptas de forma plena y sin reservas los presentes Términos
                  y Condiciones, así como las políticas de privacidad y seguridad de datos. Si no
                  estás de acuerdo con alguna parte de estos términos, te recomendamos que no utilices
                  la plataforma.
                </Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Registro y cuenta del usuario</Text>
                <View style={styles.bulletList}>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                      El usuario debe registrarse con información veraz, completa y actualizada
                      (nombre, documento, correo, teléfono, etc.).
                    </Text>
                  </View>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                      El usuario es responsable de mantener la confidencialidad de sus credenciales
                      de acceso.
                    </Text>
                  </View>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                      En caso de olvido o pérdida de contraseña, el sistema ofrece un proceso de
                      recuperación seguro mediante correo electrónico.
                    </Text>
                  </View>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                      No se permite el uso indebido o fraudulento de la plataforma.
                    </Text>
                  </View>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                      El usuario puede eliminar su cuenta en cualquier momento desde su perfil.
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Uso del sistema</Text>
                <View style={styles.bulletList}>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                      La plataforma SENAFOOD es de uso exclusivo para la comunidad interna del SENA
                      Salomia.
                    </Text>
                  </View>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                      Los usuarios pueden visualizar el menú, realizar pedidos, efectuar pagos
                      (efectivo o Nequi), revisar su historial y enviar comentarios.
                    </Text>
                  </View>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                      Se prohíbe el uso del sistema con fines fraudulentos, actividades comerciales
                      externas o cualquier acción que comprometa la integridad del servicio.
                    </Text>
                  </View>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                      No se permite el uso indebido o fraudulento de la plataforma.
                    </Text>
                  </View>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                      El administrador se reserva el derecho de suspender o eliminar cuentas que
                      violen estos términos.
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Pagos y pedidos</Text>
                <View style={styles.bulletList}>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                      Los pedidos solo se procesarán una vez confirmada la transacción o método de
                      pago.
                    </Text>
                  </View>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                      El usuario podrá cancelar un pedido solo si aún no ha sido procesado o
                      entregado.
                    </Text>
                  </View>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                      Los métodos de pago disponibles son efectivo y Nequi, gestionados bajo
                      procesos seguros de verificación y encriptación.
                    </Text>
                  </View>
                  <View style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                      Los precios, disponibilidad y descripciones de productos pueden variar según el
                      día.
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Protección de datos personales</Text>
                <Text style={styles.sectionText}>
                  SENAFOOD cumple con la Ley 1581 de 2012 sobre protección de datos personales y las
                  normativas locales de comercio electrónico. Los datos personales y financieros se
                  almacenan de forma segura y encriptada, y no serán compartidos con terceros sin la
                  autorización explícita del usuario.
                </Text>
                <Text style={[styles.sectionText, { marginTop: 12 }]}>
                  Tu información será tratada de forma segura según las políticas del SENA y la Ley
                  de Protección de Datos Personales.
                </Text>
              </View>

              <View style={styles.modalButtonsRow}>
                <Pressable style={styles.acceptButton} onPress={handleContinue}>
                  <Text style={styles.acceptButtonText}>Aceptar y continuar</Text>
                </Pressable>
                <Pressable style={styles.closeButton} onPress={() => setShowTerms(false)}>
                  <Text style={styles.closeButtonText}>Cerrar</Text>
                </Pressable>
              </View>
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
  modalTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: TEXT,
    textAlign: 'center',
    marginBottom: 24,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: TEXT,
    marginBottom: 12,
  },
  sectionText: {
    color: TEXT,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'left',
  },
  bulletList: {
    marginTop: 8,
    gap: 10,
  },
  bulletRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  bulletDot: {
    color: ACCENT,
    fontSize: 18,
    lineHeight: 22,
    marginTop: 2,
  },
  bulletText: {
    color: TEXT,
    fontSize: 15,
    lineHeight: 22,
    flex: 1,
  },
  modalButtonsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },
  acceptButton: {
    flex: 1,
    backgroundColor: ACCENT,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  closeButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  closeButtonText: {
    color: TEXT,
    fontWeight: '700',
    fontSize: 16,
  },
});
