import React, { useState } from 'react'
import { View } from 'react-native'
import { useRouter } from 'expo-router'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { AuthLayout } from '@/components/ui/AuthLayout'

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSendLink = () => {
    // TODO: Implementar envío de enlace de recuperación
    console.log('Enviar enlace a:', email)
    router.push('/(stack)/recoverySent')
  }

  return (
    <AuthLayout header={<Logo size="lg" />} bottomImageHeight="26%">
      <View className="mt-6">
        <Input
          label="Correo Electronico"
          placeholder="Ingresa tu correo/Documento"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          className="bg-[#F5F1EB]"
        />

        <View className="mt-4">
          <Button
            title="ENVIAR ENLACE"
            onPress={handleSendLink}
            fullWidth
            variant="primary"
            className="rounded-full py-3 shadow-none"
          />
        </View>
      </View>
    </AuthLayout>
  )
}

export default ForgotPasswordScreen
