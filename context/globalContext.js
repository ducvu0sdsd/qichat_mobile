import React, { createContext, useState } from 'react'
import { TypeHTTP, api } from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const globalContext = createContext()

const GlobalContext = ({ children }) => {
    const [user, setUser] = useState()

    const showAlert = (title, message, onCancel, onOK) => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: 'Cancel',
                    onPress: onCancel,
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: onOK
                }
            ],
            { cancelable: false }
        );
    };

    const checkToken = (pathname) => new Promise(async (resolve, reject) => {
        const publics = ['SignInScreen', 'SignUpScreen', 'VerificationScreen', 'InformationScreen', 'PublicScreen']
        const accessToken = await AsyncStorage.getItem('accessToken')
        const refreshToken = await AsyncStorage.getItem('refreshToken')
        // await AsyncStorage.removeItem('accessToken')
        // await AsyncStorage.removeItem('refreshToken')
        if (!accessToken)
            if (!refreshToken)
                if (!publics.includes(pathname))
                    resolve('SignInScreen')
        if (!publics.includes(pathname)) {
            api({ type: TypeHTTP.GET, sendToken: true, path: '/get-user-by-tokens' })
                .then(user => {
                    setUser(user)
                    user.operating = {
                        status: true,
                        time: new Date()
                    }
                    api({ type: TypeHTTP.PUT, sendToken: false, path: `/users/${user._id}`, body: user })
                        .then(res => {
                            const friends_id = res.friends.map(item => item._id)
                            friends_id.push(res._id)
                            // Socket.emit('update-room', friends_id)
                            resolve(null)
                        })
                })
                .catch(async (error) => {
                    await AsyncStorage.removeItem('accessToken')
                    await AsyncStorage.removeItem('refreshToken')
                    resolve('PublicScreen')
                })
        } else {
            api({ type: TypeHTTP.GET, sendToken: true, path: '/get-user-by-tokens' })
                .then(user => {
                    setUser(user)
                    resolve('MessageScreen')
                })
        }
    })


    const data = {
        user
    }

    const handler = {
        setUser,
        checkToken,
        showAlert
    }

    return (
        <globalContext.Provider value={{ data, handler }}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalContext