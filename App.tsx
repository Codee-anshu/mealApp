
import { NavigationContainer, useNavigation } from '@react-navigation/native';
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
import IconComponent from './components/Icon';
import FavoriteContextProvider from './store/context/favoriteContext';
import FavoriteScreen from './Screens/FavoriteScreen';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();



function App(): JSX.Element {



  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName='All Products'>
          <Stack.Screen
            name='All Products'
            component={CatagoryScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <IconComponent
                  name={"star"}
                  onPress={() => {
                    navigation.navigate('favoriteMeal')
                  }} />
              )
            })
            }
          />
          <Stack.Screen name='mealOverviewScreen' component={MealOverviewScreen} />
          <Stack.Screen name='mealDetails' component={MealDetailScreen} />
          <Stack.Screen
            name='favoriteMeal'
            component={FavoriteScreen}
            options={{
              title: 'Favorite Meals'
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({

});

export default App;
