import React from 'react'
import { Tabs } from 'expo-router'
import icons from '../../constants/icons'
import { Image, Text, View } from 'react-native'

const TabIcon = ({ icon, color, name }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text style={{ color: color }} className="text-xs">
                {name}
            </Text>
        </View>
    )
}

const HomeLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#0296E5',
                tabBarInactiveTintColor: '#67686D',
                tabBarStyle: {
                    backgroundColor: '#242A32',
                    borderTopWidth: 2,
                    borderTopColor: '#0296E5',
                    height: 78
                }
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="Home"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabIcon
                            icon={icons.search}
                            color={color}
                            name="Search"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="watchList"
                options={{
                    title: 'WatchList',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabIcon
                            icon={icons.save}
                            color={color}
                            name="Watch List"
                        />
                    )
                }}
            />
        </Tabs>
    )
}

export default HomeLayout