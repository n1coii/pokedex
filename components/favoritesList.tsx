import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {useFavorites} from '../hooks/FavoritesContext';
import PokeCard from './pokeCard';
import styles from './styles';
import { View } from './Themed';



const FavoritesList = ({ navigation }) => {
    // const {name, url} = route.params;
    const [poke, setPoke] = useState();
    const [loading, setLoading] = useState(true);
    const [pokeTypes, setPokeTypes] = useState([]);
    const {favorites, addToFavorites} = useFavorites();
    console.log("Favorites in LIST: ", favorites)
    // let DATA = [poke.types, poke.moves];

    // useEffect(() => {
    //     fetch(url)
    //       .then((response) => response.json())
    //     //   .then(response => console.log("RESPONSE: ", response))
    //       .then((response) => setPoke(response))
    //     //   .then((poke) => setPokeTypes(poke.types))
    //     //   .then((json) => console.log("JSON: ",json))
    //       .catch((error) => console.error(error))
    //       .finally(() => setLoading(false));
    //   }, []);
    //   const addFavorite = () => {
    //       addToFavorites(poke);
    //   }
    return (
        // <View style={ styles.pokemonList }>
        // {/* {loading ? <ActivityIndicator/> : ( */}
          <FlatList
            style={styles.pokemonList}
            data={favorites}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
                <PokeCard {...item} navigation={navigation}/>
            )}
            // onEndReachedThreshold={0}
            // onEndReached={fetchAllPokemons}

            />
        //   {/* )} */}
    //   </View>
    )
            }
export default FavoritesList;