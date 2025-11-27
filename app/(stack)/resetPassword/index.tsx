import React, { useState } from 'react'
import { View } from 'react-native'
import { useRouter } from 'expo-router'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { AuthLayout } from '@/components/ui/AuthLayout'

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()

  const handleReset = () => {
    // TODO: Implementar restablecimiento de contraseña
    console.log('Reset password', { password, confirmPassword })
    router.push('/(stack)/resetSuccess')
  }

  return (
    <AuthLayout header={<Logo size="lg" />} bottomImageHeight="26%">
      <View className="mt-4">
        <Input
          label="Nueva contraseña"
          placeholder="Ingrese su contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoComplete="password"
          className="bg-[#F5F1EB]"
        />

        <Input
          label="Confirmar contraseña"
          placeholder="Ingrese su contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          autoCapitalize="none"
          autoComplete="password"
          className="bg-[#F5F1EB]"
        />

        <View className="mt-5">
          <Button
            title="RESTABLECER CONTRASEÑA"
            onPress={handleReset}
            fullWidth
            variant="primary"
            className="rounded-full py-3 shadow-none"
          />
        </View>
      </View>
    </AuthLayout>
  )
}

export default ResetPasswordScreen
