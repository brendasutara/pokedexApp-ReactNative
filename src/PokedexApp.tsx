import '../gesture-handler';
import { ThemeContextProvider } from './presentation/context/ThemeContext';
import { StackNavigator } from './presentation/navigator/StackNavigator';

export const PokedexApp = () => {
    return (
        <ThemeContextProvider>
            <StackNavigator />
        </ThemeContextProvider>
    )
}