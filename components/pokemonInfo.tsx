import React, { PureComponent, useEffect, useState } from 'react';
//import UI from react-native
import { View, Text, Image, ActivityIndicator, FlatList, SectionList, ScrollView } from 'react-native';
//import styles for component.
import styles from './styles';

const PokemonInfo = ({ route, navigation }) => {
    const {name, url} = route.params;
    const [poke, setPoke] = useState();
    const [loading, setLoading] = useState(true);
    const [pokeTypes, setPokeTypes] = useState([]);
    // let DATA = [poke.types, poke.moves];

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
        //   .then(response => console.log("RESPONSE: ", response))
          .then((response) => setPoke(response))
        //   .then((poke) => setPokeTypes(poke.types))
        //   .then((json) => console.log("JSON: ",json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    //   console.log("Poke:", poke)
    return (
        <View style={styles.container}>
        {loading ? <ActivityIndicator/> : (
            <ScrollView >
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