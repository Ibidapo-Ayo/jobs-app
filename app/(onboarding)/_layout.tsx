import React from 'react'
import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const OnboardingLayoutScreen = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{
                headerShown: true,
                headerRight: () => {
                    return (
                        <View>
                            <Text style={styles.headerTitle}>Jobspot</Text>
                        </View>
                    )
                },
                title: "",
                headerShadowVisible: false,
            }} />

            <Stack.Screen
            name='login'
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name='register'
            options={{
                headerShown: false
            }}
            />
        </Stack>
    )
}

export default OnboardingLayoutScreen


const styles = StyleSheet.create({
    headerTitle: {
        fontFamily: "Poppins-SemiBold",
        fontWeight: "500",
        fontSize: 20
    }
})