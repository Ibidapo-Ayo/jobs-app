import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { PopularServicesItemsProps } from '@/types'

const PopularItemsCard = ({ info }: {
    info: PopularServicesItemsProps
}) => {
    return (
        <View className={`mx-5 w-64 rounded-2xl h-32 bg-secondary overflow-hidden`}>
            <ImageBackground source={info.image}
                resizeMode='cover'
                className='w-full h-full'>
                <View className='w-full h-full bg-[#00000060] p-5'>
                    <Text className='text-white font-semibold text-2xl tracking-tight'>{info.title}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default PopularItemsCard