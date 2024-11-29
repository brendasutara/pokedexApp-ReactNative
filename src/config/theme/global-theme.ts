import { StyleSheet } from "react-native";

export const globalTheme = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },

    //card
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'grey',
        height: 120,
        flex: 0.5,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        color: 'white',
        top: 10,
        left: 10,
    },
    pokeball: {
        width: 100,
        height: 100,
        right: -25,
        top: -25,
        opacity: 0.4,
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -15,
        top: -30,
    },

    pokeballContainer: {
        alignItems: 'flex-end',
        width: '100%',
        position: 'absolute',

        overflow: 'hidden',
        opacity: 0.5,
    },
    // fin card

    FAB: {
        position: 'absolute',
        bottom: 20,
        right: 20
    }
})