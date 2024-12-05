import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { popularServicesItems } from '@/constants/Data'
import PopularItemsCard from './popularItems-card'

const FeaturedJob = () => {
    return (
        <View className='mt-10 w-full flex flex-col'>
            <View className='flex flex-row justify-between w-full items-center'>
                <Text className='text-2xl font-semibold '>Featured Job</Text>
                <Link href={"/"} className='text-textColor text-xl'>See all</Link>
            </View>

            <View className='mt-4'>
                <FlatList
                    horizontal
                    data={popularServicesItems}
                    renderItem={({ item }) => (
                        <PopularItemsCard info={item} />
                    )}

                />
            </View>
        </View>
    )
}

export default FeaturedJob