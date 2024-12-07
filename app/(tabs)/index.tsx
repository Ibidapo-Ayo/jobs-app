import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import FeaturedJob from '@/components/FeaturedJob';

const HomeScreen = () => {
  return (
    <SafeAreaView edges={["top"]} className='h-full w-full bg-white'>
      <ScrollView className='mx-5'>
        <View className='flex flex-row'>
          <View className='w-[85%] flex flex-row h-12 rounded-full bg-secondary px-3 items-center gap-3'>
            <Ionicons name="search-outline" size={24} color={"#95969D"} className='text-textColor' />
            <View className='w-5/6'>
              <TextInput className='border-none placeholder:text-textColor text-xl' placeholder='Search for vocational jobs' />
            </View>
          </View>
          <View className='w-[15%] flex justify-end items-end'>
            <View className='bg-primary rounded-full h-12 w-12 flex items-center justify-center'>
              <Ionicons name="search" size={24} color="#fff" className='text-center text-textColor' />
            </View>
          </View>
        </View>

        <View className='mt-10'>
          <FeaturedJob />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen