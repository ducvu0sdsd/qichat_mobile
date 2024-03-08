import React from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import { View } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserIcon from '../components/userIcon';
import MessageSection from '../components/messageSection';
import { useNavigation } from '@react-navigation/native'

const ChatScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ paddingHorizontal: 15, width: '100%', paddingTop: 30, backgroundColor: 'white', height: '100%' }}>
            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', height: '7%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('MessageScreen')}>
                        <Icon name='arrow-left' style={{ color: 'black', fontSize: 30, marginRight: 10 }} />
                    </TouchableOpacity>
                    <UserIcon />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 600 }}>Vu Tien Duc</Text>
                        <Text style={{ fontSize: 13, marginLeft: 3 }}>In Operation</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='phone-outline' style={{ color: 'black', fontSize: 26, marginRight: 5 }} />
                    <Icon name='video-outline' style={{ color: 'black', fontSize: 33, marginRight: 5 }} />
                    <Icon name='information-outline' style={{ color: 'black', fontSize: 30, marginRight: 5 }} />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10, height: '80%', }}>
                <MessageSection style={'flex-end'} />
                <MessageSection style={'flex-end'} />
                <MessageSection style={'flex-start'} />
                <MessageSection style={'flex-start'} />
                <MessageSection style={'flex-start'} />
                <MessageSection style={'flex-end'} />
                <MessageSection style={'flex-end'} />
                <MessageSection style={'flex-end'} />
                <MessageSection style={'flex-start'} />
                <MessageSection style={'flex-start'} />
                <MessageSection style={'flex-start'} />
                <MessageSection style={'flex-end'} />
                <MessageSection style={'flex-end'} />
                <MessageSection style={'flex-end'} />
                <MessageSection style={'flex-end'} />
                <MessageSection style={'flex-end'} />
                <MessageSection style={'flex-end'} /><MessageSection style={'flex-end'} />
                <MessageSection style={'flex-end'} />
                <MessageSection style={'flex-end'} />
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