import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'


type SubmitButtonProps = {
    title: string,
    isLoading?: boolean,
    onClick: () => void
}

const SubmitButton = ({ title, isLoading, onClick }: SubmitButtonProps) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={onClick} activeOpacity={0.9}><Text style={styles.buttonText}>{title}</Text></TouchableOpacity>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    btnContainer: {
        width: "auto",
        padding: 15,
        backgroundColor: Colors.primary.DEFAULT,
        marginTop: 20,
        borderRadius: 10
    },
    buttonText: {
        textTransform: "uppercase",
        color: "white",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18
    }
})