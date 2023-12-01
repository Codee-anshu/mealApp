import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import Icon from '../components/Icon';

const MealDetailScreen = ({ route, navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.title,
            headerRight: () =>{
                return <Icon/>
            }
        })
    }, [navigation])

    const ingredients = route.params.ingredients
    const steps = route.params.steps
    return (
        <>
            <ScrollView>
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: route.params.imageUrl }}
                    />
                    <View style={styles.mealDetail}>
                        <Text style={styles.detailText}>{route.params.duration}m</Text>
                        <Text style={styles.detailText}>{route.params.complexity.toUpperCase()}</Text>
                        <Text style={styles.detailText}>{route.params.affordability.toUpperCase()}</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>Ingredients</Text>

                        {
                            ingredients.map((val, index) => {
                                return <Text
                                    key={index}
                                    style={styles.subDetails}
                                >{val}</Text>
                            })
                        }
                    </View>
                    <View>
                        <Text style={styles.subTitle}>Steps</Text>

                        {
                            steps.map((val, index) => {
                                return <Text
                                    key={index}
                                    style={styles.subDetails}
                                >{val}</Text>
                            })
                        }
                    </View>


                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    mealDetail: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    detailText: {
        color: '#343a40'
    },
    subTitle: {
        marginTop:10,
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        borderBottomWidth: 1,
        textTransform:'uppercase'
    },
    subDetails: {
        backgroundColor: '#cccccc',
        color: '#595959',
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal:15,
        textAlign: 'center',
        fontSize:16,
        

    }

})

export default MealDetailScreen