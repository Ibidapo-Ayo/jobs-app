import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link, Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#22C55E",
                headerShadowVisible: false,
                tabBarInactiveTintColor: '#000',
                tabBarHideOnKeyboard: true
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <View className='px-5'>
                                <Text className='text-xl font-normal tracking-wide text-textColor'>Welcome Back!</Text>
                                <Text className='font-semibold text-black tracking-tight text-3xl'>John Doe 👋</Text>
                            </View>
                        )
                    },
                    headerRight: () => {
                        return (
                            <View className='px-5'>
                                <Link href={"/(tabs)/profile"} className='shadow-sm h-14 w-14 rounded-full relative'>
                                    <Image source={require("../../assets/images/gardner.jpg")} className='w-full h-full object-cover rounded-full' />
                                </Link>
                            </View>
                        )
                    },
                    title: "",
                    tabBarIcon: ({ color, focused }) => {
                        return <Feather name="home" size={24} className='mt-1' color={color} />
                    },
                    headerTitle: "",
                }}

            />

            <Tabs.Screen
                name='profile'

                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return <Feather name='user' size={24} className='mt-1' color={color} />
                    },
                    title: ''
                }}

            />
        </Tabs>
    )
}

export default TabsLayout