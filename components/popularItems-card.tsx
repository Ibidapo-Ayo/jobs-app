import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { PopularServicesItemsProps } from '@/types'
import Ionicons from '@expo/vector-icons/Ionicons'

const PopularItemsCard = ({ info }: {
    info: PopularServicesItemsProps
}) => {
    return (
        <View className={`mx-5 rounded-2xl h-32 bg-white`} style={styles.box}>
            <View className='w-full'>
                <View className='flex flex-row items-center justify-between'>
                    <View style={styles.titleContainer}>
                        <Text className='text-white font-semibold tracking-tight ' style={[styles.title]}>{info.title}</Text>
                    </View>
                    <View>
                        <View className='bg-primary-100 flex flex-row items-center justify-center' style={styles.favouriteBtn}>
                            <Ionicons name="heart" size={20} color="white" className='text-center' />
                        </View>
                    </View>
                </View>
                <Text className='font-normal' style={styles.category}>{info.category}</Text>
            </View>
        </View>
    )
}

export default PopularItemsCard


const styles = StyleSheet.create({
    box: {
        width: 250,
        borderRadius: 10,
        borderWidth: 3,
        padding: 10,
        borderColor: "#F2F2F3",
    },
    title: {
        fontSize: 20,
    },
    titleContainer: {
        width: "85%"
    },
    category: {
        marginTop: 10,
        textTransform: "capitalize"
    },
    favouriteBtn: {
        width: 30,
        height: 30,
        borderRadius: "50%",
    }
})