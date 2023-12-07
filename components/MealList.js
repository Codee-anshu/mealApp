import { View, FlatList } from 'react-native';
import MealItem from './MealItem';

const MealList = ({listData})=>{
    const renderMealHandler = (itemdata) => {
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
                data={listData}
                keyExtractor={(item) => item.id}
                renderItem={renderMealHandler}
            />
        </View>
        </>
    )
}

export default MealList