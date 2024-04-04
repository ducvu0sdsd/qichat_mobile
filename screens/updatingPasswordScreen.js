import React, { useState } from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import bg from '../assets/bg-dung.jpg'
import banner from '../assets/banner.png'
import Logo from '../components/logo'
import { TypeHTTP, api, systemID } from '../utils/api'


const UpdatingPassword = ({ setCurrentStep, user }) => {
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const handleConfirm = () => {
        if (newPassword.length < 6) {
            console.log('New Password must be at least 6 characters')
            // handler.notify(notifyType.WARNING, 'New Password must be at least 6 characters')
            return
        }
        if (newPassword !== confirmNewPassword) {
            console.log("Confirm Password must be match with password")
            return
        }
        api({ type: TypeHTTP.PUT, path: `/users/update-forgot-password/${user?._id}`, body: { password: systemID, newPassword } })
            .then(res => {
                // handler.notify(notifyType.SUCCESS, "Update Password Successfully")
                console.log("Update Password Successfully")
                navigation.navigate('SignInScreen')
            })
            .catch(error => {
                console.log("Update Password Failed")
                // handler.notify(notifyType.FAIL, "Update Password Failed")
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
                secureTextEntry={true}
                value={newPassword}
                onChangeText={e => setNewPassword(e)}
                style={{ marginTop: 7, paddingHorizontal: 15, fontSize: 16, backgroundColor: 'white', borderRadius: 10, width: 300, borderColor: 'white', height: 45, borderWidth: 2 }}
                placeholder='New Password' />
            <TextInput
                secureTextEntry={true}
                value={confirmNewPassword}
                onChangeText={e => setConfirmNewPassword(e)}
                style={{ marginTop: 7, paddingHorizontal: 15, fontSize: 16, backgroundColor: 'white', borderRadius: 10, width: 300, borderColor: 'white', height: 45, borderWidth: 2 }}
                placeholder='Confirm Password' />
            <TouchableOpacity onPress={() => handleConfirm()} style={{ marginTop: 10 }}>
                <View style={{ paddingVertical: 7, borderRadius: 10, width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF6E6E' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins', color: 'white' }}>Update</Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default UpdatingPassword