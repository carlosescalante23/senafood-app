import { Stack } from 'expo-router';
import React from 'react';

const StackLayout = () => {
   return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="login/index" options={{
        headerShown: false,
      }} />

    <Stack.Screen name="register/index" options={{
        headerShown: false,
      }} />

      <Stack.Screen name="forgotPassword/index" options={{
        headerShown: false,
      }} />

      <Stack.Screen name="recoverySent/index" options={{
        headerShown: false,
      }} />

      <Stack.Screen name="resetPassword/index" options={{
        headerShown: false,
      }} />

      <Stack.Screen name="resetSuccess/index" options={{
        headerShown: false,
      }} />

      <Stack.Screen name="terms/index" options={{
        headerShown: false,
      }} />

    </Stack>
  );
}

export default StackLayout
