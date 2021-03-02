
//import React form react
import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
//import styles fro your PokeCard component.
import styles from './styles';
//Define your stateless componetns, and destrcuts props from function arguments
const PokeCard = ({name, url, navigation}) => {
    return (
        <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => navigation.navigate("PokemonInfo", {name, url})}>
            <View  style={styles.listItemContainer}>
                <Text style={styles.pokeItemHeader}>{name}</Text>
                {/* <Image source={{uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${name}.png`}}/> */}
                {/* <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}} 
                        style={styles.pokeImage}/> */}
                {/* <Image source={{uri: sprites.back_default}} 
                        style={styles.pokeImage}/> */}
            </View>
        </TouchableOpacity>
    )
}


export default PokeCard;