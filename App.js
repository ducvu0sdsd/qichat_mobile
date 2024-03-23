import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import GlobalContext from './context/globalContext';
import { View } from 'react-native';

export default function App() {

  // icons
  //https://oblador.github.io/react-native-vector-icons

  Font.loadAsync({
    'Poppins': require('./assets/fonts/Poppins-Medium.ttf'),
  });

  return (
    <GlobalContext>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </GlobalContext>
  );
}
