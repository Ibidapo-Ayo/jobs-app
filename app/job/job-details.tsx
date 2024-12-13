import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const JobDetails = () => {
  return (
    <SafeAreaView edges={["top"]}  className='h-full w-full' style={{
      backgroundColor: "white",
    }}>
      <Text>JobDetails</Text>
    </SafeAreaView>
  )
}

export default JobDetails