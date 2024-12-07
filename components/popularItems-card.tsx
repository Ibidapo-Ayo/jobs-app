import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { PopularServicesItemsProps } from '@/types'

const PopularItemsCard = ({ info }: {
    info: PopularServicesItemsProps
}) => {
    return (
        <View className={`mx-5 rounded-2xl h-32 bg-secondary`} style={styles.box}>
            <View className='w-full h-full bg-[#00000060] p-5'>
                <Text className='text-white font-semibold text-2xl tracking-tight'>{info.title}</Text>
            </View>
        </View>
    )
}

export default PopularItemsCard


const styles = StyleSheet.create({
    box: {
        width: 250,
        padding: 10,
        borderRadius: 10
    }
})