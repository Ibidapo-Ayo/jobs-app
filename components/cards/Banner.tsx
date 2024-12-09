import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Banner = () => {
    return (
        <View className='w-full' style={styles.cardContainer}>
            <Text style={styles.cardText} className='font-semibold'>Become an Employer</Text>
            <Text style={{
                fontSize: 18,
                color: "white",
                fontWeight: "400"
            }} className='tracking-tight'>Hire and Manage</Text>

            <TouchableOpacity className='bg-secondary-orange' style={styles.joinBtn}><Text
                style={styles.btnText}
            >Become an Employer</Text></TouchableOpacity>
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: 143,
        padding: 20,
        borderRadius: 10,
        backgroundColor: "#0D0140"
    },
    cardText: {
        color: "#fff",
        fontSize: 30,
    },
    joinBtn: {
        backgroundColor: "#FF9228",
        width: "auto",
        marginTop: 20,
        height: 35,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 6
    },
    btnText: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontWeight: "600"
    }
})