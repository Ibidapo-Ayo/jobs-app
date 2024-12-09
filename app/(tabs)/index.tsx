import { ScrollView, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Banner from '@/components/cards/Banner'
import RecentJobs from '@/components/RecentJobs'

const HomeScreen = () => {
  return (
    <SafeAreaView edges={["top"]} className='h-full w-full' style={{
      backgroundColor: "white",
    }}>
      <ScrollView>
        <View className='mx-5'>
          <Banner />
          <RecentJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen