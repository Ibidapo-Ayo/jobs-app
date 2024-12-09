import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import { Colors } from '@/constants/Colors';

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.secondary.DEFAULT,
                headerShadowVisible: false,
                tabBarInactiveTintColor: Colors.secondary[100],
                tabBarHideOnKeyboard: true,
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
                                <Text className='font-semibold text-primary tracking-tight text-3xl'>John Doe 👋</Text>
                            </View>
                        )
                    },
                    headerRight: () => {
                        return (
                            <View className='px-5'>
                                <Link href={"/(tabs)/profile"} className='shadow-sm h-12 w-12 rounded-full relative'>
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
                name='search'

                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return <Feather name='search' size={24} className='mt-1' color={color} />
                    },
                    title: ''
                }}

            />

            <Tabs.Screen
                name='create'

                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return <View style={styles.createIcon}>
                            <Feather name='plus' size={24} className='mt-1 font-bold text-center' color={"white"} />
                        </View>
                    },
                    title: ''
                }}

            />

            <Tabs.Screen
                name='bookmarks'

                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return <Feather name='bookmark' size={24} className='mt-1' color={color} />
                    },
                    title: ''
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

const styles = StyleSheet.create({
    createIcon: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        backgroundColor: Colors.primary.DEFAULT,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: -40
    }
})