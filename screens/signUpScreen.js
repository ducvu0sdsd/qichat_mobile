import React, { useContext, useState } from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import bg from '../assets/bg-dung.jpg'
import banner from '../assets/banner.png'
import Logo from '../components/logo'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { signWithGoogle } from '../components/firebase/firebase'
import { globalContext } from '../context/globalContext'
import { TypeHTTP, api } from '../utils/api'
import { formatPhoneByFireBase } from '../utils/call'

const SignUpScreen = () => {

    const navigation = useNavigation();
    const { handler } = useContext(globalContext)
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignUpWithPhoneNumber = async () => {
        if (password !== confirmPassword) {
            return
        }
        if (phone === '')
            return
        api({ body: { phone: formatPhoneByFireBase(phone), password }, path: '/sign-up', type: TypeHTTP.POST, sendToken: false })
            .then(async (res) => {
                handler.setUser(res)
                navigation.navigate('VerificationScreen')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSignUpWithGoogle = () => {
        signWithGoogle('sign-up')
            .then(res => {
                handler.setUser(res)
                navigation.navigate('VerificationScreen')
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
                onChangeText={e => setPassword(e)}
                style={{ marginTop: 7, paddingHorizontal: 15, fontSize: 16, backgroundColor: 'white', borderRadius: 10, width: 300, borderColor: 'white', height: 45, borderWidth: 2 }}
                placeholder='Password' />
            <TextInput
                value={confirmPassword}
                onChangeText={e => setConfirmPassword(e)}
                style={{ marginTop: 7, paddingHorizontal: 15, fontSize: 16, backgroundColor: 'white', borderRadius: 10, width: 300, borderColor: 'white', height: 45, borderWidth: 2 }}
                placeholder='Confirm Password' />
            <TouchableOpacity onPress={() => handleSignUpWithPhoneNumber()} style={{ marginTop: 10 }}>
                <View style={{ paddingVertical: 7, borderRadius: 10, width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF6E6E' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins', color: 'white' }}>Sign Up</Text>
                </View>
            </TouchableOpacity>
            <View style={{ marginTop: 15 }}>
                <Text style={{ color: 'white', fontSize: 17, fontFamily: 'Poppins' }}>Or</Text>
            </View>
            <TouchableOpacity onPress={() => handleSignUpWithGoogle()} style={{ marginTop: 15 }}>
                <View style={{ borderWidth: 2, borderColor: 'white', paddingVertical: 7, borderRadius: 10, width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name='gmail' style={{ color: 'white', fontSize: 25, transform: [{ translateY: -1 }], marginRight: 5 }} />
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins', color: 'white' }}>Sign up with Gmail</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.navigate('SignInScreen')}>
                <Text style={{ fontFamily: 'Poppins', fontSize: 16, textAlign: 'center', color: 'white' }}>I’m already using Qichat?</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default SignUpScreen