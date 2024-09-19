import { View, Text, Button, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import icons from '../constants/icons'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl py-4">Bem Vindo!!</Text>
      <Button
        title='Começe aqui'
        onPress={() => router.push('./home')}
      />
    </View>
  )
}

export default index