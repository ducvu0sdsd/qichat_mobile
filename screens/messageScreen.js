import React, { useState } from 'react'
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import avatar from '../assets/avatar.jpg'
import bg from '../assets/bg.webp'
import UserMessage from '../components/userMessage'
import Menu from '../components/menu'
import message from '../assets/icon-message.png'

export const options = {
    CHATS: 'a',
    GROUPS: 'b',
    ONLINE: 'c'
}

const MessageScreen = () => {

    const [currentOption, setCurrentOption] = useState(options.CHATS)

    const returnOption = () => {
        if (currentOption === options.CHATS)
            return 'flex-start'
        if (currentOption === options.GROUPS)
            return 'center'
        if (currentOption === options.ONLINE)
            return 'flex-end'
    }

    return (
        <>
            <View style={{ paddingHorizontal: 15, paddingTop: 30, height: '91%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={message} style={{ width: 50, height: 50 }} />
                        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Messages</Text>
                    </View>
                    <Image source={avatar} style={{ borderRadius: 55, width: 55, height: 55 }} />
                </View>
                <View style={{ position: 'relative', marginTop: 15, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#E0E0E0', borderRadius: 25, height: 50 }}>
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
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                </ScrollView>
            </View >
            <Menu />
        </>
    )
}

export default MessageScreen