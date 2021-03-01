import React, { PureComponent, useEffect, useState } from 'react';
//import UI from react-native
import { View, Text, Image, ActivityIndicator, FlatList, SectionList } from 'react-native';
//import styles for component.
import styles from './styles';

const PokemonInfo = ({ route, navigation }) => {
    const {name, url} = route.params;
    const [poke, setPoke] = useState();
    const [loading, setLoading] = useState(true);
    const [pokeTypes, setPokeTypes] = useState([]);
    // let DATA = [poke.types, poke.moves];

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/1/')
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
            <>
                <Image source={{ uri: poke.sprites.front_default }}
                        style={styles.pokemonImage} />
                <Text style={styles.nameOfPokemon}>{name}</Text>
                <FlatList
                    numColumns={2}
                    data={poke.types}
                    renderItem={({ item }) => {
                        return (
                            <Text>{item.type.name}</Text>
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
                            <Text>{item.move.name}</Text>
                        )
                    }}
                    ListHeaderComponent={() => <Text style={styles.pokeInfoListTitle}>Moves</Text>}
                    stickyHeaderIndices={[0]}
                    keyExtractor={(item, index) => item + index}
                />
            </>
        )}
        </View>
    );

}

export default PokemonInfo;