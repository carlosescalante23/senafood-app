import React from 'react'
import { View, Image } from 'react-native'

export type LogoProps = {
  size?: 'sm' | 'md' | 'lg'
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md'
}) => {
  const sizeClasses = {
    sm: { image: 120 },
    md: { image: 160 },
    lg: { image: 220 }
  }

  const currentSize = sizeClasses[size]

  return (
    <View className="items-center">
      <Image
        source={require('@/assets/images/logo.png')}
        style={{ width: currentSize.image, height: currentSize.image }}
        resizeMode="contain"
      />
    </View>
  )
}

