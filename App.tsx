
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CatagoryScreen from './Screens/CatagoryScreen';
import MealOverviewScreen from './Screens/MealOverviewScreen';
import MealDetailScreen from './Screens/MealDetailScreen';


const Stack = createNativeStackNavigator();



function App(): JSX.Element {


  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='All Products'>
        <Stack.Screen name='All Products' component={CatagoryScreen} />
        <Stack.Screen name='mealOverviewScreen' component={MealOverviewScreen} />
        <Stack.Screen name='mealDetails' component={MealDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
