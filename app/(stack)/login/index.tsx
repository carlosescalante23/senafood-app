import { AuthLayout } from '@/components/ui/AuthLayout'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Logo } from '@/components/ui/Logo'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // TODO: Implementar logica de login
    console.log('Login:', { email, password })
  }

  return (
    <AuthLayout header={<Logo size="lg" />} bottomImageHeight="26%">
      <View className="mt-6">
        <Input
          label="Correo Electronico"
          placeholder="Ingresa tu correo"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          className="bg-[#F5F1EB]"
        />

        <Input
          label="Contraseña"
          placeholder="Ingrese su contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoComplete="password"
          className="bg-[#F5F1EB]"
        />

        <View className="mt-6">
          <Button
            title="Iniciar sesión"
            onPress={()=>{router.push('/(drawer)/home')}}
            fullWidth
            variant="primary"
            className="rounded-full py-3 shadow-none"
          />
        </View>

        <View className="mt-8 items-center">
          <View className="flex-row items-center mb-4">
            <Text className="text-[#2b2b2b] text-sm font-poppins-regular">
              ¿no tienes cuenta?{' '}
            </Text>
            <Link href="/(stack)/register" asChild>
              <TouchableOpacity>
                <Text className="text-tertiary-500 text-sm font-poppins-medium">
                  registrate
                </Text>
              </TouchableOpacity>
            </Link>
          </View>

          <Link href="/(stack)/forgotPassword" asChild>
            <TouchableOpacity>
              <Text className="text-[#2b2b2b] text-sm font-poppins-regular">
                ¿Has olvidado tu contraseña?
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </AuthLayout>
  )
}

export default LoginScreen
