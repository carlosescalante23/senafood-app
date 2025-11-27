import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { ActivityIndicator, Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

export type ButtonProps = TouchableOpacityProps & {
  title: string
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient'
  tipo?: 'card' | 'text-only'
  precio?: string
  loading?: boolean
  fullWidth?: boolean
  source?: {}
}

export const Button: React.FC<ButtonProps> = ({
  title,
  precio,
  variant = 'primary',
  loading = false,
  fullWidth = false,
  disabled,
  className,
  tipo,
  source,
  ...props
}) => {
  const baseClasses = 'rounded-lg px-6 py-4 items-center justify-center'
  const variantClasses = {
    primary: 'bg-primary-500',
    secondary: 'bg-secundary-500',
    outline: 'border-2 border-primary-500 bg-transparent',
    gradient: 'bg-primary-400'
  }
  const textClasses = {
    primary: 'text-primary-50',
    secondary: 'text-white',
    outline: 'text-primary-500',
    gradient: 'text-white'
  }
  const disabledClasses = 'opacity-50'

  if (variant === 'gradient') {
    return (
      <TouchableOpacity
        className={`${baseClasses} ${
          fullWidth ? 'w-full' : ''
        } ${disabled || loading ? disabledClasses : ''} ${className || ''} overflow-hidden`}
        disabled={disabled || loading}
        {...props}
      >
        <LinearGradient
          colors={['#ff8537', '#ff5e07']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            borderRadius: 8,
          }}
        />
        <View className="relative z-10">
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text
              className={`font-poppins-bold text-base uppercase text-white ${textClasses}`}
            >
              {title}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    )
  }
  if(tipo === 'card'){
    return(<TouchableOpacity
      className={`${baseClasses} ${variantClasses[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${disabled || loading ? disabledClasses : ''} ${className || ''}`}
      disabled={disabled || loading}
      {...props}
    >
        <Image source={source} style={{width:'100%', marginBottom: 5}} />
        <Text
          
          className={`font-poppins-bold  ${textClasses[variant]}`}
        >
          {title}
        </Text>
        <Text
          
          className={`font-poppins-bold  ${textClasses[variant]}`}
        >
          {precio}
        </Text>
      
    </TouchableOpacity>
  )}

  return (
    <TouchableOpacity
      className={`${baseClasses} ${variantClasses[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${disabled || loading ? disabledClasses : ''} ${className || ''}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#ff5e07' : '#fff'} />
      ) : (
        <Text
          className={`font-poppins-bold uppercase ${textClasses[variant]}`}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}

