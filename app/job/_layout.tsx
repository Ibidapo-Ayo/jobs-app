import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

const JobDetailsLayout = () => {
    const router = useRouter()

    const handleBack = () => {
        router.back()
    }
    return (
        <Stack>
            <Stack.Screen name='job-details' options={{
                headerShown: true,
                headerShadowVisible: false,
                headerLeft: () => {
                    return (
                        <TouchableOpacity
                            onPress={handleBack}
                        ><Ionicons name="chevron-back" size={24} color="black" /></TouchableOpacity>
                    )
                },
                title: "",
                headerRight: () => {
                    return (
                        <TouchableOpacity><Ionicons name="ellipsis-vertical" size={24} color={Colors.primary.DEFAULT} /></TouchableOpacity>
                    )
                },
            }}
            />
        </Stack>
    )
}

export default JobDetailsLayout