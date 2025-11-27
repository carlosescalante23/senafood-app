import React from 'react'
import { View, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export type CheckboxProps = TouchableOpacityProps & {
  checked: boolean
  onPress: () => void
  label?: string
  labelComponent?: React.ReactNode
  labelClassName?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onPress,
  label,
  labelComponent,
  labelClassName,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center"
      activeOpacity={0.7}
      {...props}
    >
      <View
        className={`w-5 h-5 rounded-[3px] border-2 items-center justify-center ${
          checked
            ? 'bg-primary-500 border-primary-500'
            : 'border-[#2d2d2d] bg-white'
        }`}
      >
        {checked && (
          <Ionicons name="checkmark" size={16} color="#fff" />
        )}
      </View>
      {label && (
        <Text className={`text-gray-800 text-sm ml-2 font-poppins-regular ${labelClassName || ''}`}>
          {label}
        </Text>
      )}
      {labelComponent && (
        <View className="ml-2">{labelComponent}</View>
      )}
    </TouchableOpacity>
  )
}

