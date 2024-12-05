import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import FeaturedJob from '../../components/FeaturedJob';

const HomeScreen = () => {
  return (
    <SafeAreaView edges={["top"]} className='px-5 h-full bg-white'>
      <View className='flex flex-row gap-2'>
        <View className='flex flex-row w-4/5 h-16 rounded-xl bg-secondary px-3 items-center gap-3'>
          <Ionicons name="search-outline" size={24} color={"#95969D"} className='text-textColor' />
          <View className='w-5/6'>
            <TextInput className='border-none placeholder:text-textColor text-xl' placeholder='Search for vocational jobs' />
          </View>
        </View>
        <View className='w-[20%] h-16 rounded-xl bg-secondary flex justify-center items-center'>
          <Ionicons name="filter" size={24} color="#95969D" className='text-center text-textColor' />
        </View>
      </View>

      <FeaturedJob />
    </SafeAreaView>
  )
}

export default HomeScreen