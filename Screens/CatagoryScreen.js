import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CatagoryCard from '../components/CatagoryCard';
import { CATEGORIES } from '../data/dummy-data';


const CatagoryScreen = ({navigation}) => {

    function renderCatagory(itemdata) {
        const pressHandle=()=>{
            navigation.navigate('mealOverviewScreen',{
                catagoryId:itemdata.item.id
            })
        }
        
        return <CatagoryCard
            title={itemdata.item.title}
            color={itemdata.item.color}
            onPress={pressHandle}
        />
    }

    return (
        <>
            <View style={styles.listView}>
                <FlatList
                    data={CATEGORIES}
                    keyExtractor={(item) => item.id}
                    renderItem={renderCatagory}
                    numColumns={2}
                />
            </View>


        </>
    )
}
const styles = StyleSheet.create({
    listView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})


export default CatagoryScreen