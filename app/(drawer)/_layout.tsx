import CustomDrawer from '@/components/shared/CustomDrawer'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Drawer } from 'expo-router/drawer'
import React from 'react'
const DrawerLayout = () => {
  return (
  <Drawer
    drawerContent={CustomDrawer}
    screenOptions={{
        overlayColor: 'rgba(0,0,0,0.4)',
    }}
  >
    <Drawer.Screen 
        name="home/index" 
        options={{ 
            title: 'Inicio',
            drawerIcon: ({color, size}) => (
                <Ionicons name="home-outline" size={size} color={color} />
            ),
        }} 
    />


    <Drawer.Screen 
        name="menu/index" 
        options={{ 
            title: 'Menu' ,
            drawerIcon: ({color, size}) => (
                <Ionicons name="menu-outline" size={size} color={color} />
            ),
        }} 
    />


    <Drawer.Screen 
        name="historial/index" 
        options={{ 
            title: 'Historial de Pedidos',
            drawerIcon: ({color, size}) => (
                <Ionicons name="list-circle-sharp" size={size} color={color} />
            ),
        }} 
    /> 


     <Drawer.Screen 
        name="perfil/index" 
        options={{ 
            title: 'Perfil de Usuario',
            drawerIcon: ({color, size}) => (
                <Ionicons name="person-outline" size={size} color={color} />
            ),
         }} 
    /> 


    <Drawer.Screen 
        name="carrito/index" 
        options={{ 
            title: 'Carrito de Compras',
            drawerIcon: ({color, size}) => (
                <Ionicons name="car-outline" size={size} color={color} />
            ),
        }} 
    />



    <Drawer.Screen 
        name="validarPedido/index" 
        options={{ 
            title: 'validarPedido',
            drawerIcon: ({color, size}) => (
                <Ionicons name="car-outline" size={size} color={color} />
            ),
        }} 
    />

    
  </Drawer>
)
}

export default DrawerLayout