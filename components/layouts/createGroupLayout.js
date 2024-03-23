import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import UserIcon from '../userIcon'
import Icon from 'react-native-vector-icons/Octicons';
import avatar from '../../assets/avatar.jpg'

const CreateGroupLayout = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <View style={{ position: 'relative' }}>
                    <Image source={avatar} style={{ borderRadius: 70, width: 140, height: 140 }} />
                    <Icon name='pencil' style={{ color: '#999', fontSize: 20, position: 'absolute', top: 0, right: -10 }} />
                </View>
            </View>
            <View style={{ borderWidth: 1, borderColor: '#999', borderRadius: 25, marginTop: 20, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name='pencil' style={{ position: 'absolute', left: 15, zIndex: 1, color: '#999', fontSize: 22, marginRight: 5 }} />
                <TextInput placeholder='Type your message...' style={{ paddingLeft: 40, paddingRight: 40, fontSize: 15, height: 50, width: '98%', borderRadius: 25 }} />
            </View>
            <View>
                <Text style={{ fontWeight: '700', fontSize: 20, marginTop: 30 }}>Participants(3)</Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <UserIcon size={50} />
                        <Text style={{ fontSize: 17, fontWeight: '600', marginLeft: 10 }}>Vu Tien Duc</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <UserIcon size={50} />
                        <Text style={{ fontSize: 17, fontWeight: '600', marginLeft: 10 }}>Vu Tien Duc</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ fontSize: 35, fontWeight: '300', marginLeft: 10 }}>+</Text>
                        <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 10 }}>Add Participant</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CreateGroupLayout