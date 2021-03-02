import React, { useContext, useState } from 'react';
import { Button } from 'react-native';



const FavoritesContext = React.createContext()


export function FavoritesProvider({ children }) {
const [favorites, setFavorites] = useState([])

const addToFavorites = (item) => {
    // let newFavorites = favorites;
    // newFavorites.push(item)
    let newFavorites = favorites;
    newFavorites.push(item);
    console.log("FAvorites before updaet:", favorites)
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

// export const AddFavoriteButton = (item) => {
//     const {favorites, setFavorites} = useContext(FavoritesContext);
//     return (
//         <Button 
//         onPress={() => setFavorites(item + favorites)}

//         />
//     )
// }
