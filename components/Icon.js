import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'


const IconComponent = ({name, onPress}) => {
const navigation = useNavigation();

    return (
        <Pressable onPress={onPress}>
            <Icon name={name} size={24} color='black'/>
        </Pressable>
    )
}

export default IconComponent