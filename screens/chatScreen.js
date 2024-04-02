import React, { useContext, useEffect } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import { View } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserIcon from '../components/userIcon';
import MessageSection from '../components/messageSection';
import { useNavigation, useRoute } from '@react-navigation/native'
import { messageContext } from '../context/messageContext';
import { globalContext } from '../context/globalContext';
import { returnID, returnImage, returnName, returnRemainingObject } from '../utils/room';
import { tinhSoPhutCham } from '../utils/time';

const ChatScreen = () => {

    const { messageData } = useContext(messageContext)
    const { data, handler } = useContext(globalContext)
    const navigation = useNavigation();

    const route = useRoute()
    useEffect(async () => {
        const goal = await handler.checkToken(route.name)
        if (goal !== null)
            navigation.navigate(goal)
    }, [route.name])


    return (
        <View style={{ paddingHorizontal: 15, width: '100%', paddingTop: 30, backgroundColor: 'white', height: '100%' }}>
            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', height: '7%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('MessageScreen')}>
                        <Icon name='arrow-left' style={{ color: 'black', fontSize: 30, marginRight: 10 }} />
                    </TouchableOpacity>
                    <UserIcon avatar={returnImage(messageData.currentRoom, data.user)} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 600 }}>{returnName(messageData.currentRoom, data.user)}</Text>
                        <Text style={{ fontSize: 13, marginLeft: 3 }}>
                            {messageData.currentRoom.type === 'Single' ?
                                data.user.friends.map(user => user._id).includes(returnID(messageData.currentRoom, data.user)) ?
                                    returnRemainingObject(messageData.currentRoom, data.user).operating.status === true ?
                                        "Online"
                                        :
                                        `Operated in ${tinhSoPhutCham(returnRemainingObject(messageData.currentRoom, data.user).operating.time) ? tinhSoPhutCham(returnRemainingObject(messageData.currentRoom, data.user).operating.time) : '0 second'} ago`
                                    :
                                    "Stranger"
                                :
                                `${messageData.currentRoom.users.length} Participants`
                            }
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='phone-outline' style={{ color: 'black', fontSize: 26, marginRight: 5 }} />
                    <Icon name='video-outline' style={{ color: 'black', fontSize: 33, marginRight: 5 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('MessageInformationScreen')}>
                        <Icon name='information-outline' style={{ color: 'black', fontSize: 30, marginRight: 5 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10, height: '80%', }}>
                {messageData.messages.map((message, index) => {
                    return message.user_id === data.user._id ?
                        <MessageSection key={index} style={'flex-end'} information={message.information} />
                        :
                        <MessageSection key={index} avatar={message.user.avatar} style={'flex-start'} information={message.information} />
                })}
            </ScrollView>
            <View style={{ marginBottom: 15, marginTop: 5, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name='microphone-outline' style={{ position: 'absolute', left: 15, top: 10, zIndex: 1, color: '#999', fontSize: 26, marginRight: 5 }} />
                <TextInput placeholder='Type your message...' style={{ paddingLeft: 40, paddingRight: 73, fontSize: 15, height: 45, width: '98%', backgroundColor: '#F4F4F4', borderRadius: 25 }} />
                <View style={{ position: 'absolute', top: 10, right: 10, flexDirection: 'row' }}>
                    <Icon name='attachment' style={{ zIndex: 1, color: '#999', fontSize: 26, marginRight: 5, }} />
                    <Icon name='send' style={{ zIndex: 1, color: '#999', fontSize: 26, marginRight: 5 }} />
                </View>
            </View>
        </View>
    )
}

export default ChatScreen