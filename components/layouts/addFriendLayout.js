import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import UserIcon from '../userIcon'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Phone from 'react-native-vector-icons/SimpleLineIcons';
import bg from '../../assets/bg-vuong.png'
import avatar from '../../assets/avatar.jpg'


const AddFriendLayout = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <View style={{ position: 'relative', alignItems: 'center' }}>
                    <Image source={bg} style={{ width: 140, height: 140, borderRadius: 10 }} />
                    <View style={{ position: 'absolute', top: '35%', left: '45%', transform: [{ translateX: -37.5 }, { translateY: -37.5 }] }}>
                        <Text style={{ fontSize: 14, color: 'white' }}>Vũ Tiến Đức</Text>
                        <Image source={avatar} style={{ width: 75, height: 75, marginTop: 5, marginLeft: 7 }} />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'col', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: 'black', padding: 8, borderRadius: 10, top: 20, width: '80%', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='web' style={{ fontSize: 20 }} />
                    <Text style={{ fontSize: 13, fontWeight: '700' }}>  Add Friend By Name</Text>
                </TouchableOpacity>
                {/* <Text style={{ borderWidth: 1, borderColor: 'black', padding: 8, borderRadius: 10, top: 20, width: '80%', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Icon name='email-outline' style={{ fontSize: 20 }} />
                    <Text style={{ fontSize: 13, fontWeight: '700' }}>  Add Friend By Gmail</Text>
                </Text>
                <Text style={{ borderWidth: 1, borderColor: 'black', padding: 8, borderRadius: 10, top: 20, width: '80%', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Phone name='phone' style={{ fontSize: 20 }} />
                    <Text style={{ fontSize: 13, fontWeight: '700' }}>  Add Friend By Phone Number</Text>
                </Text>
                <Text style={{ borderWidth: 1, borderColor: 'black', padding: 8, borderRadius: 10, top: 20, width: '80%', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ backgroundColor: '#C0C0C0', }} >+84 </Text>
                    <Text style={{}}> Enter Phone Number </Text>
                </Text> */}

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