import React from 'react'
import { Image, View } from 'react-native'
import avatar from '../assets/avatar.jpg'

const UserIcon = ({ size }) => {
    return (
        <View>
            <Image source={avatar} style={{ borderRadius: 55, width: size ? size : 55, height: size ? size : 55 }} />
        </View>
    )
}

export default UserIcon