import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import JobsCard from './cards/JobsCard'
import { jobs } from '@/constants/Data'

const RecentJobs = () => {
  return (
    <View style={styles.recentJobStyles}>
      <Text style={styles.title}>Recent Job List</Text>

      <View style={{
        marginTop: 10
      }}>


        {jobs.map((job, index) => (
          <JobsCard
            title={job.title}
            description={job.description}
            price={job.price}
            logo='Logo'
            tags={job.tags}
            key={index}
          />
        ))}
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