import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
  return (
    <View className="h-full bg-primary">
      <View className="mt-10 mb-5 px-4">
        <Text className="text-white text-2xl">What do you want to watch?</Text>
      </View>
      <View className="bg-slate-500 mx-3 p-2 rounded-2xl">
        <TextInput
          className="text-white text-xl"
          placeholder='Search'
          placeholderTextColor={'#9E9C9C'}
        />
      </View>
      <StatusBar style='light' />
    </View>
  )
}

export default Home