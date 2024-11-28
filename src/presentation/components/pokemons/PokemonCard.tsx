import { View, Image, Pressable } from 'react-native';
import { Pokemon } from '../../../domain/entities/pokemon'
import { Card, Text } from 'react-native-paper'
import { globalTheme } from '../../../config/theme/global-theme'
import { FadeInImage } from '../ui/FadeInImage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigator/StackNavigator';

interface Props {
    pokemon: Pokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    return (
        <Pressable
            style={{ flex: 1 }}
            onPress={() => navigation.navigate('PokemonScreen', { pokemonId: pokemon.id })}>
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
        </Pressable>
    )
}