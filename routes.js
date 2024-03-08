import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PublicScreen from './screens/publicScreen';
import SignInScreen from './screens/signInScreen';
import SignUpScreen from './screens/signUpScreen';
import MessageScreen from './screens/messageScreen';
import ChatScreen from './screens/chatScreen';
const Stack = createNativeStackNavigator();

const Routes = () => {

    const screens = [
        {
            name: 'PublicScreen',
            component: PublicScreen
        },
        {
            name: 'SignInScreen',
            component: SignInScreen
        },
        {
            name: 'SignUpScreen',
            component: SignUpScreen
        },
        {
            name: 'MessageScreen',
            component: MessageScreen
        },
        {
            name: 'ChatScreen',
            component: ChatScreen
        }
    ]

    return (
        <Stack.Navigator initialRouteName="ChatScreen">
            {screens.map((screen, index) => (
                <Stack.Screen key={index} name={screen.name} component={screen.component} options={{ headerShown: false }} />
            ))}
        </Stack.Navigator>
    )
}

export default Routes