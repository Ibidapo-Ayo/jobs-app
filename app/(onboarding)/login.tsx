import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import CustomInput from '@/components/CustomInput'
import SubmitButton from '@/components/SubmitButton'
import GoogleSignIn from '@/components/GoogleSignIn'
import { useRouter } from 'expo-router'

const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const handleSubmit = () => {
        console.log(email, password);
    }
    return (
        <SafeAreaView className='px-5' style={styles.container}>
            <ScrollView>
                <View className='pt-20'>
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
                </View>

                <View style={styles.inputContainer}>
                    <CustomInput
                        type='text'
                        value={email}
                        label='Email'
                        placeholder='example@gmail.com'
                        onChange={setEmail}
                    />
                        <CustomInput
                            type='password'
                            value={password}
                            label='Password'
                            placeholder='******'
                            onChange={setPassword}
                        />

                        <View style={{
                            marginTop: 20
                        }}><Text
                            style={{
                                color: Colors.primary.DEFAULT,
                                textAlign: "right",
                                fontSize: 16,
                                fontWeight: "600"
                            }}
                        >Forgot Password?</Text></View>

                        <SubmitButton title='Login' onClick={handleSubmit} />
                        <GoogleSignIn title='SIgn in with Google' />

                        <View style={styles.signupTextContainer}><Text style={styles.signupText}>You don't have an account yet?  <Text onPress={() => router.push("/(onboarding)/register")} style={{
                            color: Colors.secondary.DEFAULT,
                            textDecorationLine: "underline"
                        }}>Sign up</Text></Text></View>
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: "600",
        color: Colors.primary.DEFAULT,
        textAlign: 'center',
        fontFamily: "Poppins-SemiBold"
    },
    subTitle: {
        fontSize: 16,
        color: Colors.primary.DEFAULT,
        letterSpacing: 0.2,
        textAlign: "center",
        marginTop: 10
    },
    container: {
        display: "flex",
    },
    inputContainer: {
        marginTop: 50
    },

    signupTextContainer: {
        marginTop: 20
    },
    signupText: {
        fontWeight: "400",
        textAlign: "center",
        fontSize: 18
    }
})