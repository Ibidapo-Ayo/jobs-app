import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import Feather from '@expo/vector-icons/Feather';

type CustomInputProps = {
    label?: string,
    placeholder?: string,
    type: string,
    value: string,
    onChange: React.Dispatch<React.SetStateAction<string>>
}

const CustomInput = ({ label, placeholder, type, value, onChange }: CustomInputProps) => {
    const [showPassword, setShowPassword] = useState(true)

    const handleShowPasword = () => {
        setShowPassword((prev) => !prev)
    }
    return (
        <View style={styles.containerStyle}>
            {label && <View><Text style={styles.label}>{label}</Text></View>}
            <TextInput placeholder={placeholder} style={styles.input}
                value={value}
                onChangeText={onChange}
                secureTextEntry={type === "password" ? showPassword : false}
            />

            {type === "password" && (
                <TouchableOpacity style={styles.eyeContainer} onPress={handleShowPasword}
                    activeOpacity={0.5}
                >
                    <Feather name={showPassword ? "eye" : "eye-off"} size={24} color="black" style={{
                        textAlign: "right"
                    }} />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    containerStyle: {
        position: "relative",
        paddingTop: 20
    },
    input: {
        borderWidth: 1,
        marginTop: 10,
        borderColor: Colors.secondary[300],
        padding: 10,
        height: 50,
        borderRadius: 5,
        fontSize: 18,
        color: Colors.primary.DEFAULT,
        fontFamily: "Poppins-Medium"
    },
    label: {
        color: Colors.primary.DEFAULT,
        fontWeight: "600",
        fontSize: 20,
        fontFamily: "Poppins-Regular"
    },
    eyeContainer: {
        position: "absolute",
        top: "76%",
        width: 25,
        right: 20
    }
})