import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { Checkbox } from '@/components/ui/Checkbox'
import { AuthLayout } from '@/components/ui/AuthLayout'

const RegisterScreen = () => {
  const [documentNumber, setDocumentNumber] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleRegister = () => {
    // TODO: Implementar logica de registro
    console.log('Register:', { documentNumber, fullName, email, password, acceptTerms })
  }

  return (
    <AuthLayout
      header={<Logo size="lg" />}
      bottomImageHeight="20%"
      scrollEnabled={true}
      headerMarginBottom={12}
      paddingTop={28}
    >
      <View className="mt-2">
        <Input
          label="Numero de documento"
          placeholder="numero de documento"
          value={documentNumber}
          onChangeText={setDocumentNumber}
          keyboardType="numeric"
          autoCapitalize="none"
          className="bg-[#F5F1EB]"
        />

        <Input
          label="Nombre completo"
          placeholder="nombre completo"
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
          className="bg-[#F5F1EB]"
        />

        <Input
          label="Correo electronico"
          placeholder="correo electronico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          className="bg-[#F5F1EB]"
        />

        <Input
          label="Contraseña"
          placeholder="Crea una contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoComplete="password"
          className="bg-[#F5F1EB]"
        />

        <View className="mt-4">
          <Button
            title="REGISTRARME"
            onPress={handleRegister}
            fullWidth
            variant="primary"
            className="rounded-full py-3 shadow-none"
          />
        </View>

        <View className="mt-6">
          <View className="flex-row items-center">
            <Checkbox
              checked={acceptTerms}
              onPress={() => setAcceptTerms(!acceptTerms)}
            />
            <Link href="/(stack)/terms" asChild>
              <TouchableOpacity>
                <Text className="text-[#1f1f1f] text-sm font-poppins-medium underline ml-3">
                  Aceptar terminos y condiciones
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        <View className="mt-6 items-center">
          <Link href="/(stack)/login" asChild>
            <TouchableOpacity>
              <Text className="text-primary-500 text-sm font-poppins-bold uppercase">
                ¿YA TIENES UNA CUENTA?
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </AuthLayout>
  )
}

export default RegisterScreen
