import React, { useContext, useState } from 'react';
import { Button } from 'react-native';



const FavoritesContext = React.createContext()


export function FavoritesProvider({ children }) {
const [favorites, setFavorites] = useState([])

const addToFavorites = (item) => {
    let newFavorites = favorites;
    newFavorites.push(item);
    setFavorites(newFavorites)
}

return (
    <FavoritesContext.Provider value={{favorites, addToFavorites}}>
        { children }
    </FavoritesContext.Provider>
)
}

export function useFavorites() {
    return useContext(FavoritesContext)
}

export const FavoritesConsumer = FavoritesContext.Consumer;

