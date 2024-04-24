import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import UserIcon from './userIcon'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { globalContext } from '../context/globalContext'
import { returnImage, returnName, returnRemainingObject } from '../utils/room'
import { formatTime } from '../utils/time'
import { messageContext } from '../context/messageContext'
const UserMessage = ({ room, transfer = false, handleTransfer }) => {
    const { data } = useContext(globalContext)
    const { messageHandler } = useContext(messageContext)
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {
            messageHandler.setCurrentRoom(room);
            navigation.navigate('ChatScreen')
        }} style={{ flexDirection: 'row', position: 'relative', alignItems: 'center', marginVertical: 4 }}>
            <UserIcon avatar={returnImage(room, data.user)} online={room.type === 'Group' ? false : returnRemainingObject(room, data.user).operating.status} />
            <View style={{ flexDirection: 'column', marginLeft: 10, }}>
                <Text style={{ fontSize: 17, fontWeight: '600' }} >{returnName(room, data.user)}</Text>
                {transfer === false && <Text style={{ fontSize: 14 }} >{
                    room.users.filter(user => user._id === room.lastMessage.user_id)[0]?.fullName.split(' ')[room.users.filter(user => user._id === room.lastMessage.user_id)[0].fullName.split(' ').length - 1] !== undefined && room.users.filter(user => user._id === room.lastMessage.user_id)[0]?.fullName.split(' ')[room.users.filter(user => user._id === room.lastMessage.user_id)[0].fullName.split(' ').length - 1] + ": "
                }{room.lastMessage.information}</Text>}
            </View>
            {transfer === false ?
                <Text style={{ position: 'absolute', right: 0, top: 10, fontSize: 11, fontWeight: 600 }}>{formatTime(room.lastMessage.time)}</Text>
                :
                <TouchableOpacity onPress={() => handleTransfer(room)} style={{ position: 'absolute', right: 0, top: 10, fontSize: 11, fontWeight: 600, backgroundColor: 'green', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 }}>
                    <Text style={{ color: 'white' }}>Send</Text>
                </TouchableOpacity>
            }
        </TouchableOpacity>
    )
}

export default UserMessage