import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import "./global.css"
import { Slot } from 'expo-router'

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  )
}

export default RootLayout