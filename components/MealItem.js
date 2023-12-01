import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const MealItem = ({id ,title, imageUrl, duration, affordability, complexity ,ingredients, steps}) => {
    const navigation = useNavigation();

    const pressHandler = () => {
        navigation.navigate('mealDetails',{
            id,
            title,
            imageUrl,
            duration,
            affordability,
            complexity,
            ingredients,
            steps
        })
    }
    return (
        <>
            <View style={styles.card}>
                <Pressable android_ripple={{ color: "#adb5bd" }} onPress={pressHandler}>
                    <Image
                        style={styles.mealImage}
                        source={{ uri: imageUrl }}
                    />
                    <Text style={styles.mealTilte}>
                        {title}
                    </Text>
                    <View style={styles.mealDetail}>
                        <Text>{duration}m</Text>
                        <Text>{complexity.toUpperCase()}</Text>
                        <Text>{affordability.toUpperCase()}</Text>
                    </View>
                </Pressable>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 15,
        backgroundColor: "#e0e1dd",
        borderRadius: 20
    },
    mealImage: {
        width: '100%',
        height: 250,
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    mealTilte: {
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 18,
        fontWeight: '500',
        color: 'black'
    },
    mealDetail: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})


export default MealItem