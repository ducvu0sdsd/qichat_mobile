import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PublicScreen from './screens/publicScreen';
import SignInScreen from './screens/signInScreen';
import SignUpScreen from './screens/signUpScreen';
import MessageScreen from './screens/messageScreen';
import ChatScreen from './screens/chatScreen';
import MessageInformationScreen from './screens/messageInformationScreen';
import SearchScreen from './screens/SearchScreen';
import AddingScreen from './screens/addingScreen';
import VerificationScreens from './screens/verificationScreens';
import InformationScreens from './screens/informationScreen';
import AuthContext from './context/authContext';
const Stack = createNativeStackNavigator();

const Routes = () => {

    const screens = [
        {
            name: 'SignInScreen',
            component: SignInScreen
        },
        {
            name: 'SignUpScreen',
            component: SignUpScreen
        },
        {
            name: 'VerificationScreen',
            component: VerificationScreens
        },
        {
            name: 'InformationScreen',
            component: InformationScreens
        },
        {
            name: 'PublicScreen',
            component: PublicScreen
        },
        {
            name: 'MessageScreen',
            component: MessageScreen
        },
        {
            name: 'ChatScreen',
            component: ChatScreen
        },
        {
            name: 'MessageInformationScreen',
            component: MessageInformationScreen
        },
        {
            name: 'SearchScreen',
            component: SearchScreen,
        },
        {
            name: 'AddingScreen',
            component: AddingScreen
        }
    ]

    return (
        <Stack.Navigator initialRouteName="PublicScreen">
            {screens.map((screen, index) => (
                <Stack.Screen key={index} name={screen.name} component={screen.component} options={{ headerShown: false }} />
            ))}
        </Stack.Navigator>
    )
}
export const messageRoutes = ['MessageScreen', 'ChatScreen', 'MessageInformationScreen']
export default Routes