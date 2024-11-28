import { View, Image } from 'react-native';
import { Pokemon } from '../../../domain/entities/pokemon'
import { Card, Text } from 'react-native-paper'
import { globalTheme } from '../../../config/theme/global-theme'
import { FadeInImage } from '../ui/FadeInImage';

interface Props {
    pokemon: Pokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
    return (
        <Card style={[globalTheme.cardContainer, { backgroundColor: pokemon.color }]}>
            <Text style={globalTheme.name} variant='bodyLarge' lineBreakMode='middle'>
                {pokemon.name}
                {'\n#' + pokemon.id}
            </Text>

            <View style={globalTheme.pokeballContainer}>
                <Image
                    source={require('../../../assets/pokeball-light.png')}
                    style={globalTheme.pokeball}
                />
            </View>

            <FadeInImage
                uri={pokemon.avatar}
                style={globalTheme.pokemonImage}
            />

            <Text style={[globalTheme.name, { marginTop: 35 }]}>{pokemon.types[0]}</Text>
        </Card>
    )
}