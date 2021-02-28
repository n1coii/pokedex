import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import PokeList from '../components/pokeList';
import { Text, View } from '../components/Themed';

import getPokemonsFromApiAsync from '../services/pokeapi';

export default function TabOneScreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <PokeList/>
      {/* <FlatList 
      data={data}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) => (
        <Text>{item.title}</Text>
      )}
      /> */}
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
