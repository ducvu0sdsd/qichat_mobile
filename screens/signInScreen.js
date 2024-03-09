import React, { useContext, useState } from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import bg from '../assets/bg-dung.jpg'
import banner from '../assets/banner.png'
import Logo from '../components/logo'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { TypeHTTP, api } from '../utils/api'
import { formatPhoneByFireBase } from '../utils/call'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { globalContext } from '../context/globalContext'

const SignInScreen = () => {

    const navigation = useNavigation();
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const { handler } = useContext(globalContext)

    const handleSignInWithPhoneNumber = async () => {
        api({ body: { phone: formatPhoneByFireBase(phone), password }, path: '/sign-in', type: TypeHTTP.POST, sendToken: false })
            .then(async (res) => {
                await AsyncStorage.setItem('accessToken', res.tokens.accessToken)
                await AsyncStorage.setItem('refreshToken', res.tokens.refreshToken)
                await AsyncStorage.setItem('user_id', res.user._id)
                await AsyncStorage.setItem('admin', res.user.admin + '')
                handler.setUser(res.user)
                navigation.navigate('MessageScreen')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <ImageBackground
            style={{ height: '100%', width: '100%', position: 'relative', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            source={bg}
        >
            <View style={{ position: 'absolute', top: 40, left: 20 }}>
                <Logo />
            </View>
            <Image
                style={{ width: 300, height: 230 }}
                source={banner} />
            <TextInput
                value={phone}
                onChangeText={e => setPhone(e)}
                style={{ marginTop: 20, paddingHorizontal: 15, fontSize: 16, backgroundColor: 'white', borderRadius: 10, width: 300, borderColor: 'white', height: 45, borderWidth: 2 }}
                placeholder='Phone Number' />
            <TextInput
                value={password}
                secureTextEntry={true}
                onChangeText={e => setPassword(e)}
                style={{ marginTop: 7, paddingHorizontal: 15, fontSize: 16, backgroundColor: 'white', borderRadius: 10, width: 300, borderColor: 'white', height: 45, borderWidth: 2 }}
                placeholder='Password' />
            <TouchableOpacity onPress={() => handleSignInWithPhoneNumber()} style={{ marginTop: 10 }}>
                <View style={{ paddingVertical: 7, borderRadius: 10, width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF6E6E' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins', color: 'white' }}>Sign In</Text>
                </View>
            </TouchableOpacity>
            <View style={{ marginTop: 15 }}>
                <Text style={{ color: 'white', fontSize: 17, fontFamily: 'Poppins' }}>Or</Text>
            </View>
            <TouchableOpacity style={{ marginTop: 15 }}>
                <View style={{ borderWidth: 2, borderColor: 'white', paddingVertical: 7, borderRadius: 10, width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name='gmail' style={{ color: 'white', fontSize: 25, transform: [{ translateY: -1 }], marginRight: 5 }} />
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins', color: 'white' }}>Sign in with Gmail</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={{ fontFamily: 'Poppins', fontSize: 16, textAlign: 'center', color: 'white' }}>I don't have account</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default SignInScreen