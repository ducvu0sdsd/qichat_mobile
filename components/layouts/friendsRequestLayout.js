import React from 'react'
import { Image, TouchableOpacity, Text, View } from 'react-native'
import UserIcon from '../userIcon'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FriendsRequestLayout = () => {
    return (
        <>
            <View>
                <Text style={{ fontWeight: '700', fontSize: 23, marginTop: 20 }}>People</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <UserIcon />
                    <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 10 }}>Vu Tien Duc</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Icon name='check' style={{ color: 'black', fontSize: 25 }} />
                    <Icon name='close' style={{ color: 'black', fontSize: 25 }} />
                </View>
            </View>
        </>
    )
}

export default FriendsRequestLayout