import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { Logo } from '@/components/ui/Logo'
import { AuthLayout } from '@/components/ui/AuthLayout'

const ResetSuccessScreen = () => {
  const router = useRouter()

  return (
    <AuthLayout header={<Logo size="lg" />} bottomImageHeight="26%">
      <View className="items-center mt-2">
        <View className="w-full bg-white rounded-3xl px-6 py-8"
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
              source={require('@/assets/images/check.png')}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
          </View>
          <Text className="text-center text-sm font-poppins-regular text-[#2f2f2f] leading-6">
            Contraseña actualizada exitosamente
          </Text>

          <TouchableOpacity
            className="mt-7 bg-primary-500 rounded-full py-3 items-center"
            activeOpacity={0.85}
            onPress={() => router.replace('/(stack)/login')}
          >
            <Text className="text-white text-base font-poppins-bold">Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthLayout>
  )
}

export default ResetSuccessScreen
