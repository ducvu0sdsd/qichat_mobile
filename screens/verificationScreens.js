import React, { useContext, useEffect, useState } from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import bg from '../assets/bg-dung.jpg'
import banner from '../assets/banner.png'
import Logo from '../components/logo'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { globalContext } from '../context/globalContext'
import { signInWithPhoneNumber } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { TypeHTTP, api } from '../utils/api'
const VerificationScreens = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [otp, setOtp] = useState('')
    const { data } = useContext(globalContext)
    useEffect(() => {
        if (data.user?.email) {
            setEmail(data.user?.email)
        } else if (data.user?.phone) {
            setPhone(data.user?.phone)
        }
    }, [data.user])

    useEffect(() => {
        if (phone) {
            // setPhone(listData.user.phone);
            // const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {})
            // signInWithPhoneNumber(auth, listData.user.phone, recaptcha)
            //     .then(confirmation => {
            //         setVerification(confirmation)
            //     })
        } else if (data.user.email) {
            api({ sendToken: false, path: `/send-verify-code/${data.user.email}`, type: TypeHTTP.POST })
        }
    }, [data.user]);

    const handleSubmitOTPWithGmail = () => {
        api({ type: TypeHTTP.POST, sendToken: false, path: '/verify-gmail', body: { code: otp, email } })
            .then(res => {
                api({ type: TypeHTTP.PUT, body: { statusSignUp: 'Complete Step 2' }, path: `/users/${data.user?._id}`, sendToken: false })
                    .then(res => {
                        if (res) {
                            navigation.navigate('InformationScreen')
                        }
                    })
            })
        // .catch(error => {
        //     handler.notify(notifyType.FAIL, error.message.data)
        // })
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
            <Text style={{ color: 'white', fontSize: 20, paddingHorizontal: 30, textAlign: 'center', marginVertical: 10 }}>{`We sent you an authentication code using your ${email ? 'email' : 'phone number'} (${email ? email : phone})`}</Text>
            <TextInput
                value={otp}
                onChangeText={e => setOtp(e)}
                style={{ marginTop: 20, paddingHorizontal: 15, fontSize: 16, backgroundColor: 'white', borderRadius: 10, width: 300, borderColor: 'white', height: 45, borderWidth: 2 }}
                placeholder='Verify Code' />
            <TouchableOpacity onPress={() => handleSubmitOTPWithGmail()} style={{ marginTop: 10 }}>
                <View style={{ paddingVertical: 7, borderRadius: 10, width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF6E6E' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins', color: 'white' }}>Submit</Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default VerificationScreens