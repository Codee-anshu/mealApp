import { Pressable, StyleSheet, Text, View } from 'react-native';



const CatagoryCard = ({ title, color, onPress }) => {
    return (
        <>
            <View style={styles.container}>
                <Pressable
                    android_ripple={{ color: "#495057"}}
                    style={[styles.card, { backgroundColor: color }]}
                    onPress={onPress}
                >
                    <Text style={styles.cardText}>{title}</Text>
                </Pressable>

            </View>

        </>

    )


}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
    },
    card: {
        width: 150,
        height: 150,
        margin: '5%',
        justifyContent: "center",
        borderRadius: 10,
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 5 },
        overflow:'hidden'

    },
    cardText: {
        fontSize: 20,
        fontWeight: '500',
        color: "black",
        textAlign: "center"
    }
})

export default CatagoryCard