import React, { ReactNode } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, View, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export type AuthLayoutProps = {
  children: ReactNode
  header?: ReactNode
  backgroundColor?: string
  bottomImageHeight?: number | string
  showBottomImage?: boolean
  scrollEnabled?: boolean
  headerMarginBottom?: number
  paddingTop?: number
}

// Shared layout for auth screens: manages safe area, keyboard, and bottom wood texture.
export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  header,
  backgroundColor = '#F5F1EB',
  bottomImageHeight = '24%',
  showBottomImage = true,
  scrollEnabled = true,
  headerMarginBottom = 32,
  paddingTop = 40,
}) => {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          className="flex-1"
          scrollEnabled={scrollEnabled}
        >
          <View style={{ flex: 1, justifyContent: showBottomImage ? 'space-between' : 'flex-start' }}>
            <View className="px-7 pb-4" style={{ paddingTop }}>
              {header && <View className="items-center" style={{ marginBottom: headerMarginBottom }}>{header}</View>}
              <View style={{ width: '100%', maxWidth: 360, alignSelf: 'center' }}>
                {children}
              </View>
            </View>

            {showBottomImage && (
              <View style={{ height: bottomImageHeight, minHeight: 170 }} className="w-full overflow-hidden">
                <ImageBackground
                  source={require('@/assets/images/mesa.png')}
                  resizeMode="cover"
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
