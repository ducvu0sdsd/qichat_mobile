import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import UserIcon from '../userIcon'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Phone from 'react-native-vector-icons/SimpleLineIcons';
import bg from '../../assets/bg-vuong.png'
import avatar from '../../assets/avatar.jpg'


const AddFriendLayout = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, borderRadius: 10, overflow: 'hidden' }}>
                <ImageBackground source={bg} style={{ width: 200, height: 200, position: 'relative', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 600 }}>Vũ Tiến Đức</Text>
                    <Image source={avatar} style={{ width: 115, height: 115, borderRadius: 10 }} />
                </ImageBackground>
            </View>
            <View style={{ flexDirection: 'col', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#999', padding: 12, borderRadius: 10, top: 20, width: '80%', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='web' style={{ fontSize: 22, color: '#999' }} />
                    <Text style={{ fontSize: 13, fontWeight: '600', top: -1, color: '#999' }}>  Add Friend By Name</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#999', padding: 12, borderRadius: 10, top: 20, width: '80%', flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                    <Icon name='email-outline' style={{ fontSize: 20, color: '#999' }} />
                    <Text style={{ fontSize: 13, fontWeight: '600', top: -1, color: '#999' }}>  Add Friend By Gmail</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#999', padding: 12, borderRadius: 10, top: 20, width: '80%', flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                    <Phone name='phone' style={{ fontSize: 20, color: '#999' }} />
                    <Text style={{ fontSize: 13, fontWeight: '600', top: -1, color: '#999' }}>  Add Friend By Phone Number</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, marginLeft: 30 }}>
                <UserIcon />
                <Text style={{ fontSize: 15, fontWeight: '600', marginLeft: 10 }}>Vu Tien Duc</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 30 }}>
                <UserIcon />
                <Text style={{ fontSize: 15, fontWeight: '600', marginLeft: 10 }}>Vu Tien Duc</Text>
            </View>


        </View>
    )
}

export default AddFriendLayout