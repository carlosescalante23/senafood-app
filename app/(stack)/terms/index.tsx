import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { Logo } from '@/components/ui/Logo'

const TermsScreen = () => {
  const router = useRouter()

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 30, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center mb-6">
          <Logo size="sm" />
        </View>

        <View className="space-y-6">
          <Text className="text-xl font-poppins-bold text-black text-center">Términos y Condiciones</Text>

          <Text className="text-base font-poppins-regular text-[#414141] leading-6">
            Bienvenido(a) a SENAFOOD, una plataforma digital desarrollada con el propósito de facilitar la gestión de pedidos y pagos de los servicios de cafetería en el complejo SENA Salomia. Al registrarte y utilizar nuestros servicios, aceptas los siguientes Términos y Condiciones de uso. Por favor, léelos cuidadosamente antes de utilizar la aplicación.
          </Text>

          <Section
            title="Aceptación de los términos"
            points={[
              'El uso de SENAFOOD implica la aceptación plena de estos Términos y Condiciones, así como de las políticas complementarias de privacidad y seguridad de datos. Si no estás de acuerdo con alguno de los apartados, debes abstenerte de utilizar la plataforma.'
            ]}
          />

          <Section
            title="Registro y cuenta del usuario"
            numbered
            points={[
              'El usuario debe registrarse con información veraz, completa y actualizada (nombre, documento, correo, número, etc.).',
              'Cada usuario es responsable de mantener la confidencialidad de sus credenciales.',
              'En caso de olvido o pérdida de contraseña, el sistema ofrece un proceso de recuperación mediante correo electrónico.',
              'No se permite el uso indebido o fraudulento de la plataforma.',
              'El usuario debe cerrar sesión en cualquier momento desde su perfil.'
            ]}
          />

          <Section
            title="Uso del sistema"
            numbered
            points={[
              'La plataforma SENAFOOD está destinada exclusivamente al uso interno de la comunidad del SENA Salomia.',
              'Los usuarios pueden visualizar el menú, realizar pedidos, efectuar pagos (efectivo y Nequi), revisar su historial y enviar retroalimentación.',
              'Está prohibido el uso del sistema con fines fraudulentos, comerciales externos o cualquier otro que viole la integridad del servicio.',
              'No se permite el uso indebido o fraudulento de la plataforma.',
              'El administrador se reserva el derecho de suspender o eliminar cuentas que incumplan estos términos.'
            ]}
          />

          <Section
            title="Pagos y pedidos"
            points={[
              'Los pedidos solo se procesarán una vez confirmada la transacción o el método de pago.',
              'El usuario podrá cancelar un pedido únicamente si aún no ha sido procesado o entregado.',
              'Los métodos de pago disponibles son efectivo y Nequi, gestionados bajo procesos de seguridad y cifrado.',
              'Los precios, disponibilidad y descripciones de los productos pueden variar según el día.'
            ]}
          />

          <Section
            title="Protección de datos personales"
            points={[
              'SENAFOOD cumple con las disposiciones de la Ley 1581 de 2012 sobre protección de datos personales y las regulaciones locales de comercio electrónico. Los datos personales y financieros se almacenan de forma segura y encriptada, y no serán compartidos con terceros sin autorización expresa del usuario.',
              'Tu información será tratada de forma segura según las políticas del SENA y la Ley de Protección de Datos Personales.'
            ]}
          />
        </View>
      </ScrollView>

      <View className="flex-row items-center justify-between px-6 py-5 bg-white border-t border-[#f2f2f2]">
        <TouchableOpacity
          className="flex-1 bg-primary-500 rounded-full py-3 mr-3 items-center justify-center"
          activeOpacity={0.85}
          onPress={() => router.back()}
        >
          <Text className="text-white text-base font-poppins-bold">Continuar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-1 rounded-full py-3 ml-3 items-center justify-center"
          activeOpacity={0.75}
          onPress={() => router.back()}
        >
          <Text className="text-[#8d8d8d] text-base font-poppins-semibold">Cerrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

type SectionProps = {
  title: string
  points: string[]
  numbered?: boolean
}

const Section: React.FC<SectionProps> = ({ title, points, numbered = false }) => {
  return (
    <View className="space-y-3">
      <Text className="text-lg font-poppins-bold text-black text-center">{title}</Text>
      <View className="space-y-2">
        {points.map((point, index) => (
          <Text
            key={index}
            className="text-base font-poppins-regular text-[#414141] leading-6"
          >
            {numbered ? `${index + 1}. ${point}` : `• ${point}`}
          </Text>
        ))}
      </View>
    </View>
  )
}

export default TermsScreen
