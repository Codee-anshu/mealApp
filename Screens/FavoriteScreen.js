import { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FavoriteContext } from '../store/context/favoriteContext';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux'

const FavoriteScreen = () => {
    // while using useContextApi
    // const favoriteMealContext = useContext(FavoriteContext)
    // const favMealId = favoriteMealContext.id


    // while using redux
    const favMealId = useSelector(state => state.id)
    
    const favMeals = MEALS.filter((meals) => {
        return favMealId.includes(meals.id)
    })

    if (favMealId.length === 0) {
        return (
            <View style={styles.container}>
                <Text> You don't have any Favorite meals yet!</Text>
            </View>
        )
    }
    return <MealList listData={favMeals} />
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
})

export default FavoriteScreen