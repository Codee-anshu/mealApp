import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'


const IconComponent = () => {
const navigation = useNavigation();

    const pressHandler =()=>{
       navigation.navigate('All Products')
    }
    return (
        <Pressable onPress={pressHandler}>
            <Icon name='home' size={24} color='black'/>
        </Pressable>
    )
}

export default IconComponent