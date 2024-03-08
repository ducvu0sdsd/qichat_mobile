import React from 'react'
import { Text, View } from 'react-native'
import UserIcon from './userIcon'

const UserMessage = () => {
    return (
        <View style={{ flexDirection: 'row', position: 'relative', alignItems: 'center', marginVertical: 2 }}>
            <UserIcon />
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>Vu Tien Duc</Text>
                <Text style={{ fontSize: 14 }}>Hello, how is going?</Text>
            </View>
            <Text style={{ position: 'absolute', right: 0, top: 7, fontSize: 11, fontWeight: 700 }}>05:09 AM</Text>
        </View>
    )
}

export default UserMessage