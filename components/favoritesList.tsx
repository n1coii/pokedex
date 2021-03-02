import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {useFavorites} from '../hooks/FavoritesContext';
import PokeCard from './pokeCard';
import styles from './styles';
import { View } from './Themed';



const FavoritesList = ({ navigation }) => {
    const [poke, setPoke] = useState();
    const [loading, setLoading] = useState(true);
    const [pokeTypes, setPokeTypes] = useState([]);
    const {favorites, addToFavorites} = useFavorites();

    return (
        <View style={ styles.pokemonList }>
          <FlatList
            style={styles.pokemonList}
            data={favorites}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
                <PokeCard {...item} navigation={navigation}/>
            )}
            />
      </View>
    )
            }
export default FavoritesList;