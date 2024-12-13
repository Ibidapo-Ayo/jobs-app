import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import { Colors } from '@/constants/Colors'
import GoogleLogo from "../../assets/images/google_logo.png"
import { Link } from 'expo-router'

type JobsCardProps = {
    title: string,
    description?: string,
    price: string,
    logo: string,
    tags?: [string, string]
}

const JobsCard = ({ title, description, price, tags, logo }: JobsCardProps) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.header}>
              <Link href={"/job/job-details"} style={{
                    flex: 10
              }}>
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        gap: 5
                    }}>

                        <View style={{
                            flex: 1,
                        }}>
                            <View style={styles.logoStyle}>
                                <Image source={GoogleLogo} className='w-full h-full' />
                            </View>
                        </View>
                        <View style={{
                            flex: 5
                        }}>
                            <Text style={styles.titleStyle}>{title}</Text>
                            <Text>{description}</Text>
                        </View>
                    </View>
                </Link>
                <View style={{
                    flex: 1
                }}>
                    <Feather name='bookmark' size={20} color={Colors.secondary.DEFAULT} />
                </View>
            </View>

            <View style={{
                flex: 3
            }}>
                <Text><Text style={{ fontWeight: "700", fontSize: 20 }}>{price}</Text><Text style={{
                    fontSize: 12,
                    color: Colors.secondary[100]
                }}>/Mo</Text></Text>

                <View style={styles.tags}>
                    {tags?.map((tag, index) => (
                        <View style={{
                            width: "auto",
                            padding: 10,
                            borderRadius: 10,
                            backgroundColor: Colors.secondary[200]
                        }}
                            key={index}
                        >
                            <Text
                            style={{
                                fontSize: 12
                            }}
                            >{tag}</Text>
                        </View>
                    ))}

                    <TouchableOpacity style={styles.applyBtn}><Text style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "700",
                        fontSize: 16
                    }}>Apply</Text></TouchableOpacity>
                </View>
            </View>


        </View>
    )
}

export default JobsCard

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 20,
        backgroundColor: "white",
        width: "100%",
        height: "auto",
        padding: 20,
        borderWidth: 2,
        borderColor: Colors.secondary[200],
        flex: 1,
        flexDirection: "column",
        gap: 30,
        marginTop: 10
    },

    header: {
        flex: 1,
        flexDirection: "row"
    },
    titleStyle: {
        fontSize: 20,
        color: "#000",
        fontWeight: "700"
    },
    logoStyle: {
        width: 35,
        height: 35,
        borderRadius: "50%",
        backgroundColor: Colors.primary[100]
    },
    priceStyle: {
        fontSize: 20
    },
    tags: {
        display: "flex",
        flexDirection: "row",
        flex: 2,
        marginTop: 20,
        justifyContent: "space-between"
    },

    applyBtn: {
        backgroundColor: Colors.secondary.DEFAULT,
        width: 100,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})