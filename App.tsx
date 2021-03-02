import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FavoritesProvider } from './hooks/FavoritesContext';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // const [appFavorites, setAppFavorites] = useState([]);
  // const favorites = {appFavorites, setAppFavorites};

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <FavoritesProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </FavoritesProvider>
      </SafeAreaProvider>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    pokeListHeader: {
      fontSize: 20,
      color: '#fff'
    }
  });
}