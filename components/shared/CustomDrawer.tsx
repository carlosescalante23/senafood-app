import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Image, View } from 'react-native'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
        <View className="mx-3 mb-10 rounded-xl overflow-hidden h-[150px]">
          <Image 
          source={require('../../assets/images/logo.png')}
          style={{
              width: '100%',
              height: '100%',
          }}
          resizeMode="contain" // evita que se recorte el logo
          />
        </View>   

        <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer
