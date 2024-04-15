import React, { useContext, useEffect, useState } from 'react'
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import moon from '../assets/icon-moon.png'
import friends from '../assets/icon-friends.png'
import message from '../assets/icon-message.png'
import adding from '../assets/icon-adding.png'
import logout from '../assets/icon-logout.png'
import bg from '../assets/bg-circle.png'
import { messageRoutes } from '../routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TypeHTTP, api } from '../utils/api';
import { globalContext } from '../context/globalContext';
import { messageContext } from '../context/messageContext';

const Menu = () => {

    const route = useRoute();
    const [pathName, setPathName] = useState()
    const navigation = useNavigation();
    const { data } = useContext(globalContext)
    const { messageHandler } = useContext(messageContext)
    useEffect(() => {
        setPathName(route.name)
    }, [route.name])

    const handleLogout = async () => {
        await AsyncStorage.removeItem('accessToken')
        await AsyncStorage.removeItem('refreshToken')
        navigation.navigate('PublicScreen')
    }

    const handleToMessageScreen = () => {
        api({ sendToken: true, type: TypeHTTP.GET, path: `/rooms/${data.user?._id}` })
            .then(rooms => {
                messageHandler.setRooms(rooms)
            })
        navigation.navigate('MessageScreen')
    }

    return (
        <View style={{ paddingHorizontal: 20, marginTop: 10, borderRadius: 100 }}>
            <View style={{ backgroundColor: '#F0F3F4', justifyContent: 'space-evenly', height: 55, borderRadius: 55, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                    <ImageBackground style={{ width: 50, height: 50, borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={moon} style={{ width: 38, height: 38 }} />
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                    <ImageBackground source={pathName === 'SearchScreen' && bg} style={{ width: 50, height: 50, borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={friends} style={{ width: 38, height: 38 }} />
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleToMessageScreen()}>
                    <ImageBackground source={messageRoutes.includes(pathName) && bg} style={{ width: 50, height: 50, borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={message} style={{ width: 38, height: 38 }} />
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AddingScreen')}>
                    <ImageBackground source={pathName === 'AddingScreen' && bg} style={{ width: 50, height: 50, borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={adding} style={{ width: 38, height: 38 }} />
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLogout()}>
                    <ImageBackground style={{ width: 50, height: 50, borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={logout} style={{ width: 38, height: 38 }} />
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Menu