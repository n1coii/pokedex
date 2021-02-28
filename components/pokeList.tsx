//import PoreCompoent for preventing unnecesary updates.
import React, { PureComponent, useEffect, useState } from "react";
//import your components from react-native
import {
    View,
    Image,
    FlatList,
    TouchableOpacity,
    Text,
    ActivityIndicator,
} from "react-native";
import {
    getPokemonsFromApiAsync,
    getPokemonsFromApi,
} from "../services/pokeapi";
import PokeCard from "./pokeCard";
//import styles for your component
import styles from "./styles";

const PokeList = ({ navigation }) => {
    const [pokeList, setPokeList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
          .then((response) => response.json())
          .then((json) => setPokeList(json.results))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    

    return (
        <View style={{ flex: 1, padding: 24 }}>
        {loading ? <ActivityIndicator/> : (
          <FlatList
            data={pokeList}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
                <PokeCard {...item} navigation={navigation}/>
            )}
          />
        )}
      </View>
    );
};

export default PokeList;