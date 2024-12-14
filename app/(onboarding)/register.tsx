import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import CustomInput from '@/components/CustomInput'
import SubmitButton from '@/components/SubmitButton'
import GoogleSignIn from '@/components/GoogleSignIn'
import { useRouter } from 'expo-router'

const RegisterScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullname, setFullname] = useState("")

    const router = useRouter()

    const handleSubmit = () => {
        console.log(email, password);
    }
    return (
        <SafeAreaView  style={styles.container}>
            <ScrollView className='px-5'>
                <View className='pt-10'>
                    <Text style={styles.title}>Create an Account</Text>
                    <Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
                </View>

                <View style={styles.inputContainer}>
                    <CustomInput
                        type='text'
                        value={fullname}
                        label='Full name'
                        placeholder='John Doe '
                        onChange={setFullname}
                    />
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

                    <SubmitButton title='Sign up' onClick={handleSubmit} />
                    <GoogleSignIn title='SIgn up with Google' />

                    <View style={styles.signupTextContainer}><Text style={styles.signupText}>Already a member?  <Text onPress={() => router.push("/(onboarding)/login")} style={{
                        color: Colors.secondary.DEFAULT,
                        textDecorationLine: "underline"
                    }}>Sign in</Text></Text></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterScreen

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
        marginTop: 10,
        fontFamily: "Poppins-Regular"
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