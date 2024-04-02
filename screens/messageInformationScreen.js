import React, { useContext, useEffect } from 'react'
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import { View } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserIcon from '../components/userIcon';
import { useNavigation, useRoute } from '@react-navigation/native'
import { messageContext } from '../context/messageContext';
import bg from '../assets/bg.webp'
import avatar from '../assets/avatar.jpg'
import { globalContext } from '../context/globalContext';
import { returnID, returnImage, returnName, returnRemainingObject } from '../utils/room';
import { tinhSoPhutCham } from '../utils/time';


const MessageInformationScreen = () => {
    const navigation = useNavigation();
    const { data, handler } = useContext(globalContext)
    const { messageData } = useContext(messageContext)

    const route = useRoute()
    useEffect(() => {
        handler.checkToken(route.name)
            .then(goal => {
                if (goal !== null)
                    navigation.navigate(goal)
            })
    }, [])

    return (

        <View style={{ paddingHorizontal: 15, width: '100%', paddingTop: 30, backgroundColor: 'white', height: '100%' }}>
            <View style={{ position: 'absolute' }}>
                <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
                    <Icon name='arrow-left' style={{ color: 'black', fontSize: 30, marginRight: 10 }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 9, width: '100%' }}>
                    <View style={{ top: 35 }}>
                        <View style={{ alignItems: 'center' }}  >
                            <UserIcon avatar={returnImage(messageData.currentRoom, data.user)} />
                            <Text style={{ fontSize: 18, fontWeight: 600 }}>{returnName(messageData.currentRoom, data.user)}</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 40 }}>
                        <Text style={{ fontSize: 25, fontWeight: '600' }}>{ }</Text>
                        <Text style={{ fontSize: 15, marginLeft: 3, fontWeight: '600' }}>{
                            messageData.currentRoom.type === 'Single' ?
                                data.user.friends.map(user => user._id).includes(returnID(messageData.currentRoom, data.user)) ?
                                    returnRemainingObject(messageData.currentRoom, data.user).operating.status === true ?
                                        "Online"
                                        :
                                        `Operated in ${tinhSoPhutCham(returnRemainingObject(messageData.currentRoom, data.user).operating.time) ? tinhSoPhutCham(returnRemainingObject(messageData.currentRoom, data.user).operating.time) : '0 second'} ago`
                                    :
                                    "Stranger"
                                :
                                `${messageData.currentRoom.users.length} Participants`
                        }</Text>
                    </View>
                </View>
            </View>


            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 22, fontWeight: '600' }}>Attachments</Text>
                <View style={{ flexDirection: 'row', marginTop: 12 }}>
                    <Icon name='link-variant' style={{ color: 'black', fontSize: 25, marginRight: 10 }} />
                    <Text style={{ fontSize: 17, fontWeight: '600' }}>qiflix - watching free.rar</Text>
                </View>
                <TouchableOpacity style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ borderRadius: 10, overflow: 'hidden', width: 300 }}>
                        <ImageBackground source={bg} style={{ width: '100%', paddingVertical: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ fontSize: 16, color: 'white' }}>See All</Text>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{ marginTop: 15 }}>
                <Text style={{ fontSize: 22, fontWeight: '600' }}>Pictures & Videos</Text>
                <View style={{ flexDirection: 'row', width: '100%', gap: 10, paddingVertical: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Image source={avatar} style={{ width: 90, height: 90, borderRadius: 10 }} />
                    <Image source={avatar} style={{ width: 90, height: 90, borderRadius: 10 }} />
                    <Image source={avatar} style={{ width: 90, height: 90, borderRadius: 10 }} />
                    <Image source={avatar} style={{ width: 90, height: 90, borderRadius: 10 }} />
                    <Image source={avatar} style={{ width: 90, height: 90, borderRadius: 10 }} />
                    <Image source={avatar} style={{ width: 90, height: 90, borderRadius: 10 }} />
                </View>
            </View>
            <TouchableOpacity style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ borderRadius: 10, overflow: 'hidden', width: 300 }}>
                    <ImageBackground source={bg} style={{ width: '100%', paddingVertical: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontSize: 16, color: 'white' }}>See All</Text>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        </View >

    )
}

export default MessageInformationScreen