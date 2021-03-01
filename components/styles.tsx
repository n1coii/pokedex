//import styleSheet for creating a css abstraction.
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    pokeItemHeader: {  
        color: '#000',
        fontSize: 24,
    },
    pokeImage: {
        backgroundColor: 'transparent',
        height: 50,
        width: 50
    },
    pokemonImage: {
        height: 250,
        width: 250
    },
    nameOfPokemon: {
        fontSize: 25
    },
    pokeInfoListTitle: {
        fontSize: 20,
        padding: 20
    },
    pokeInfoListItem: {
        padding: 10
    }
})

export default styles;