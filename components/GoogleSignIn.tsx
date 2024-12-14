import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

import GoogleLogo from "../assets/images/google_logo.png"

const GoogleSignIn = ({title}:{
    title: string,
}) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={() => console.log("Hello")
        } activeOpacity={0.9}>
            <View style={{
                flex: 2,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end"
            }}><Image source={GoogleLogo} style={styles.image} /></View>
            <Text style={styles.buttonText}>{title}</Text>

        </TouchableOpacity>
    )
}

export default GoogleSignIn

const styles = StyleSheet.create({
    btnContainer: {
        width: "auto",
        padding: 15,
        backgroundColor: Colors.primary[100],
        marginTop: 20,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    buttonText: {
        textTransform: "uppercase",
        color: Colors.primary.DEFAULT,
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18,
        flex: 6,
    },
    image: {
        width: 25,
        height: 25,
    }
})