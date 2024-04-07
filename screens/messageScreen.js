import React, { useContext, useEffect, useState } from 'react'
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import bg from '../assets/bg.webp'
import UserMessage from '../components/userMessage'
import Menu from '../components/menu'
import message from '../assets/icon-message.png'
import { globalContext } from '../context/globalContext'
import { TypeHTTP, api } from '../utils/api'
import { useNavigation, useRoute } from '@react-navigation/native'
import { messageContext } from '../context/messageContext'

export const options = {
    CHATS: 'a',
    GROUPS: 'b',
    ONLINE: 'c'
}

const MessageScreen = () => {
    const navigation = useNavigation()
    const [currentOption, setCurrentOption] = useState(options.CHATS)
    const { data, handler } = useContext(globalContext)
    const { messageHandler, messageData } = useContext(messageContext)

    const route = useRoute()
    useEffect(() => {
        handler.checkToken(route.name)
            .then(goal => {
                if (goal !== null)
                    navigation.navigate(goal)
            })
    }, [])

    useEffect(() => {
        api({ sendToken: true, type: TypeHTTP.GET, path: `/rooms/${data.user?._id}` })
            .then(rooms => {
                messageHandler.setRooms(rooms)
            })
    }, [])

    const returnOption = () => {
        if (currentOption === options.CHATS)
            return 'flex-start'
        if (currentOption === options.GROUPS)
            return 'center'
        if (currentOption === options.ONLINE)
            return 'flex-end'
    }

    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <View style={{ paddingHorizontal: 15, paddingTop: 30, height: '91%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={message} style={{ width: 45, height: 45, marginRight: 10 }} />
                        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Messages</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('EditingProfile')}>
                        <Image source={{ uri: data.user?.avatar }} style={{ borderRadius: 55, width: 55, height: 55 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ position: 'relative', marginTop: 15, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#F0F3F4', borderRadius: 25, height: 50 }}>
                    <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: returnOption(), width: '100%', height: '100%', top: 0, left: 0, borderRadius: 25, overflow: 'hidden' }}>
                        <Image source={bg} style={{ width: '33%', height: '100%', borderRadius: 25 }} />
                    </View>
                    <TouchableOpacity onPress={() => setCurrentOption(options.CHATS)} style={{ width: '33%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '700', fontSize: 16, color: currentOption === options.CHATS ? 'white' : 'black' }}>All Chats</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentOption(options.GROUPS)} style={{ width: '33%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '700', fontSize: 16, color: currentOption === options.GROUPS ? 'white' : 'black' }}>Groups</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentOption(options.ONLINE)} style={{ width: '33%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '700', fontSize: 16, color: currentOption === options.ONLINE ? 'white' : 'black' }}>Online</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15, marginHorizontal: 5 }}>
                    {messageData.rooms.map((room, index) => {
                        return <UserMessage key={index} room={room} />
                    })}
                </ScrollView>
            </View >
            <Menu />
        </View>
    )
}

export default MessageScreen