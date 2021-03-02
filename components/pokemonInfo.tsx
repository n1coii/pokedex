import React, { PureComponent, useContext, useEffect, useState } from 'react';
//import UI from react-native
import { View, Text, Image, ActivityIndicator, FlatList, SectionList, ScrollView, Button } from 'react-native';
//import styles for component.
import styles from './styles';
import { addToFavorites, useFavorites, FavoritesContext, AddFavoriteButton } from '../hooks/FavoritesContext' 
import { LogBox } from 'react-native';

LogBox.ignoreWarnings(['VirtualizedLists should never be nested']);

const PokemonInfo = ({ route, navigation }) => {
    const {name, url} = route.params;
    const [poke, setPoke] = useState();
    const [loading, setLoading] = useState(true);
    const [pokeTypes, setPokeTypes] = useState([]);
    const {favorites, addToFavorites} = useFavorites();

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((response) => setPoke(response))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

      const addFavorite = () => {
          addToFavorites({name, url});
      }
    return (
        <View style={styles.container}>
        {loading ? <ActivityIndicator/> : (
            <ScrollView >
            <Button
            onPress={addFavorite}
            styles={styles.addButton}
            title="Add to favorites"
            /> 
                <Image source={{ uri: poke.sprites.front_default }}
                        style={styles.pokemonImage} />
                <FlatList
                    styles={styles.listItemContainer}
                    numColumns={2}
                    data={poke.types}
                    renderItem={({ item }) => {
                        return (
                            <Text style={styles.pokeInfoListItem}>{item.type.name}</Text>
                        )
                    }}
                    ListHeaderComponent={() => <Text style={styles.pokeInfoListTitle}>Types</Text>}
                    stickyHeaderIndices={[0]}
                    keyExtractor={(item, index) => item + index}
                />
                <FlatList
                    numColumns={2}
                    data={poke.moves}
                    renderItem={({ item }) => {
                        return (
                            <Text style={styles.pokeInfoListItem}>{item.move.name}</Text>
                        )
                    }}
                    ListHeaderComponent={() => <Text style={styles.pokeInfoListTitle}>Moves</Text>}
                    stickyHeaderIndices={[0]}
                    keyExtractor={(item, index) => item + index}
                />
            </ScrollView>
        )}
        </View>
    );

}

export default PokemonInfo;