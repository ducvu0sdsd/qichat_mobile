import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

export default function App() {

  // icons
  //https://oblador.github.io/react-native-vector-icons

  Font.loadAsync({
    'Poppins': require('./assets/fonts/Poppins-Medium.ttf'),
  });

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
