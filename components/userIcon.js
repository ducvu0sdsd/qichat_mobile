import React from 'react'
import { Image, View } from 'react-native'
import avatar from '../assets/avatar.jpg'

const UserIcon = () => {
    return (
        <View>
            <Image source={avatar} style={{ borderRadius: 55, width: 55, height: 55 }} />
        </View>
    )
}

export default UserIcon