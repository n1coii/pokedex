//import styleSheet for creating a css abstraction.
import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        backgroundColor: 'white'

      },
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#F4F4F4',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'stretch'
    },
    pokeItemHeader: {  
        color: '#000',
        fontSize: 24,
    },
    pokemonImage: {
        height: 250,
        width: 250,
        alignSelf: 'center'
    },
    nameOfPokemon: {
        fontSize: 25
    },
    pokeInfoListTitle: {
        fontSize: 20,
        padding: 20,
        alignSelf: 'stretch',
        textAlign: 'center'
    },
    pokeInfoListItem: {
        padding: 10,
        width: width/2,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        textAlign: 'center'
    },
    pokemonList: {
        backgroundColor: "white",
    },
    addButton: {
        alignSelf: "flex-end",
    }
})

export default styles;