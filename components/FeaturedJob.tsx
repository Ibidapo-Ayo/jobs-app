import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { popularServicesItems } from '@/constants/Data'
import PopularItemsCard from './popularItems-card'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRef, useState } from "react"

const FeaturedJob = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleNext = () => {
        if (activeIndex < popularServicesItems.length - 1) {
            setActiveIndex(activeIndex + 1);
            flatListRef.current.scrollToIndex({ index: activeIndex + 1 });
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
            flatListRef.current.scrollToIndex({ index: activeIndex - 1 });
        }
    };

    return (
        <View className='w-full flex flex-col'>
            <View className='flex flex-row justify-between w-full items-center'>
                <View><Text className='text-3xl font-semibold'>Featured Job</Text></View>
            </View>

            <View className='mt-10 w-full' style={styles.flatListStyle}>
                <FlatList
                    horizontal
                    data={popularServicesItems}
                    renderItem={({ item }) => (
                        <PopularItemsCard info={item} />
                    )}
                    showsHorizontalScrollIndicator={false}
                    ref={flatListRef}
                />

                <TouchableOpacity className='w-12 h-12 rounded-full bg-primary flex justify-center disabled:opacity-10' style={[styles.icons, styles.left]}
                    onPress={handlePrev}
                    disabled={activeIndex === 0}
                >
                    <Ionicons name="chevron-back" size={24} color="white" className='text-center' />
                </TouchableOpacity>
                <TouchableOpacity className='w-12 h-12 rounded-full bg-primary flex justify-center' style={[styles.icons, styles.right]}
                    onPress={handleNext}
                    disabled={activeIndex === popularServicesItems.length - 1}
                >
                    <Ionicons name="chevron-forward" size={24} color="white" className='text-center' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FeaturedJob

const styles = StyleSheet.create({
    flatListStyle: {
        height: 150,
        position: "relative"
    },
    icons: {
        position: "absolute",
        top: 55,
    },
    left: {
        left: 10
    },
    right: {
        right: 10
    }
})
