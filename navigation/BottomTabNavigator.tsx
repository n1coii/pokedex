import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import FavoritesList from '../components/favoritesList';
import PokeList from '../components/pokeList';
import PokemonInfo from '../components/pokemonInfo';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, PokemonTabParamList, FavoriteTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="PokemonsTab"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Pokemons"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="pokeball" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="star-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
// function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
//   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
// }
function TabBarIcon(props: { name: React.ComponentProps<typeof MaterialCommunityIcons>['name']; color: string }) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<PokemonTabParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={PokeList}
        options={{ headerTitle: 'Pokemons' }}
      />
      <TabOneStack.Screen
      name="PokemonInfo"
      component={PokemonInfo}
      options={ ({route}) => ({ headerTitle: route.params.name })}
      />

    </TabOneStack.Navigator>
  );
}


const TabTwoStack = createStackNavigator<FavoriteTabParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Favorites"
        component={FavoritesList}
        options={{ headerTitle: 'Favorites' }}
      />
      <TabTwoStack.Screen
      name="PokemonInfo"
      component={PokemonInfo}
      options={ ({route}) => ({ headerTitle: route.params.name })}
      />
    </TabTwoStack.Navigator>
  );
}
