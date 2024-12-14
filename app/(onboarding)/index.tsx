import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OnboardingImage from "../../assets/images/onboarding/1.png"

import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

const IndexScreen = () => {
  const router = useRouter()

  const handleNext = ()=> {
    router.push("/(onboarding)/login")
  }
  return (
    <SafeAreaView className='px-5' style={styles.container}>
      <Image source={OnboardingImage} style={styles.imageStyle} />
      <View style={{
        marginTop: 40
      }}

      >

        <View>
          <Text style={styles.title}>Find Your</Text>
          <Text style={[styles.title, styles.title2]}>Dream Job</Text>
          <Text style={styles.title}>Here!</Text>
        </View>

        <Text style={styles.description}>Explore all the most exciting job roles based on your interest and study major.</Text>

        <View style={styles.actionBtnContainer}>
          <TouchableOpacity style={styles.actionBtn} activeOpacity={0.9} onPress={handleNext}>
            <AntDesign name="arrowright" size={30} color="white" style={styles.arrowIcon} /></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default IndexScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  imageStyle: {
    width: "100%",
  },

  title: {
    fontSize: 40,
    fontWeight: "600",
    fontFamily: "Poppins-Regular",
    color: Colors.primary.DEFAULT,
    marginVertical: -10
  },

  title2: {
    color: Colors.secondary.DEFAULT
  },

  description: {
    fontSize: 18,
    color: Colors.primary.DEFAULT,
    marginTop: 10,
    letterSpacing: 0.2
  },

  actionBtnContainer: {
    marginTop: 10,
    display: "flex",
    alignItems: "flex-end"
  },

  actionBtn: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: Colors.primary.DEFAULT,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  arrowIcon: {
    textAlign: "center"
  }

})