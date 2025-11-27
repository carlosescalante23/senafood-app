import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { Logo } from '@/components/ui/Logo'
import { AuthLayout } from '@/components/ui/AuthLayout'

const RecoverySentScreen = () => {
  const router = useRouter()

  return (
    <AuthLayout header={<Logo size="lg" />} bottomImageHeight="28%">
      <View className="items-center mt-2">
        <View className="w-full bg-white rounded-3xl px-6 py-8 shadow-sm"
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.08,
            shadowRadius: 6,
            shadowOffset: { width: 0, height: 3 },
            elevation: 4,
          }}
        >
          <View className="items-center mb-6">
            <Image
              source={require('@/assets/images/mail.png')}
              style={{ width: 110, height: 90 }}
              resizeMode="contain"
            />
          </View>
          <Text className="text-center text-sm font-poppins-regular text-[#2f2f2f] leading-6">
            Hemos enviado un enlace de recuperación a tu correo electrónico. Revisa tu bandeja de entrada o carpeta de spam para continuar con el proceso.
          </Text>

          <TouchableOpacity
            className="mt-7 bg-primary-500 rounded-full py-3 items-center"
            activeOpacity={0.85}
            onPress={() => router.push('/(stack)/resetPassword')}
          >
            <Text className="text-white text-base font-poppins-bold">Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthLayout>
  )
}

export default RecoverySentScreen
