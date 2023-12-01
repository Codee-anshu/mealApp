import { FlatList, Text, View, } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealItem from '../components/MealItem';


const MealOverviewScreen = ({ route, navigation }) => {

    const catId = route.params.catagoryId
    const selectMeal = MEALS.filter((meals) =>{
        return meals.categoryIds.indexOf(catId) >= 0
    })
    useLayoutEffect(() => {
        const displayTitle = CATEGORIES.find((card) => card.id === catId).title
        navigation.setOptions({
            title: displayTitle
        })
    }, [catId, navigation])


    const pressHandler = (itemdata) => {
        const item = itemdata. item
        const mealDetails ={
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            duration:item.duration,
            affordability:item.affordability,
            complexity:item.complexity,
            ingredients:item.ingredients,
            steps:item.steps,
            isVegan:item.isVegan,
            isGlutenFree:item.isGlutenFree,
            isVegetarian:item.isVegetarian,
            isLactoseFree:item.isLactoseFree
        }
        return <MealItem {...mealDetails}/>
    }

    return (
        <>
        <View style={{flex:1}}>   
        <FlatList
                data={selectMeal}
                keyExtractor={(item) => item.id}
                renderItem={pressHandler}
            />
        </View>
        </>
    )

}


export default MealOverviewScreen