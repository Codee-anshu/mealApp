
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealList from '../components/MealList';


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


    return <MealList listData={selectMeal}/>

}


export default MealOverviewScreen