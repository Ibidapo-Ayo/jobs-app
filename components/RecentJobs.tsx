import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import JobsCard from './cards/JobsCard'

const RecentJobs = () => {
  return (
    <View style={styles.recentJobStyles}>
      <Text style={styles.title}>Recent Job List</Text>

      <View style={{
        marginTop: 10
      }}>

        <JobsCard
          title='Product Designer'
          description='Google Inc. Califonia'
          price='15K'
          logo='Logo'
          tags={["Senior designer", "Full time"]}
        />
        <JobsCard
          title='Product Designer'
          description='Google Inc. Califonia'
          price='15K'
          logo='Logo'
          tags={["Senior designer", "Full time"]}
        />
        <JobsCard
          title='Product Designer'
          description='Google Inc. Califonia'
          price='15K'
          logo='Logo'
          tags={["Senior designer", "Full time"]}
        />
        <JobsCard
          title='Product Designer'
          description='Google Inc. Califonia'
          price='15K'
          logo='Logo'
          tags={["Senior designer", "Full time"]}
        />
      </View>
    </View>
  )
}

export default RecentJobs

const styles = StyleSheet.create({
  recentJobStyles: {
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.primary.DEFAULT
  }
})