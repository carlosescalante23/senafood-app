import React from 'react'
import { TextInput, TextInputProps, View, Text } from 'react-native'

export type InputProps = TextInputProps & {
  label?: string
  error?: string
}

export const Input = React.forwardRef<TextInput, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <View className="mb-5">
        {label && (
          <Text className="text-[#1f1f1f] text-base mb-2 font-poppins-medium">
            {label}
          </Text>
        )}
        <TextInput
          ref={ref}
          className={`border border-[#ff8537] rounded-full px-5 py-3 text-base font-poppins-regular bg-white text-[#262626] ${
            error ? 'border-red-500' : ''
          } ${className || ''}`}
          placeholderTextColor="#9b9b9b"
          {...props}
        />
        {error && (
          <Text className="text-red-500 text-xs mt-1 font-poppins-regular">
            {error}
          </Text>
        )}
      </View>
    )
  }
)

Input.displayName = 'Input'

