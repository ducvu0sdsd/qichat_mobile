import React, { useContext, useEffect, useState } from 'react'
import { Image, TouchableOpacity, Text, View } from 'react-native'
import bg from '../assets/bg.webp'
import adding from '../assets/icon-adding.png'
import { globalContext } from '../context/globalContext'
import Menu from '../components/menu'
import FriendsRequestLayout from '../components/layouts/friendsRequestLayout';
import CreateGroupLayout from '../components/layouts/createGroupLayout';
import AddFriendLayout from '../components/layouts/addFriendLayout';
import { useRoute } from '@react-navigation/native'
export const options = {
    ADD_FRIEND: 'a',
    CREATE_GROUP: 'b',
    FRIEND_REQUEST: 'c'
}

const AddingScreen = () => {
    const [currentOption, setCurrentOption] = useState(options.ADD_FRIEND)
    const { data, handler } = useContext(globalContext)

    const route = useRoute()
    useEffect(() => {
        handler.checkToken(route.name)
            .then(goal => {
                if (goal !== null)
                    navigation.navigate(goal)
            })
    }, [])

    const returnOption = () => {
        if (currentOption === options.ADD_FRIEND)
            return 'flex-start'
        if (currentOption === options.CREATE_GROUP)
            return 'center'
        if (currentOption === options.FRIEND_REQUEST)
            return 'flex-end'
        return 'flex-start'; // Trả về một giá trị mặc định nếu không có trường hợp nào khớp
    }

    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <View style={{ paddingHorizontal: 15, paddingTop: 30, height: '91%', flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={adding} style={{ width: 45, height: 45, marginRight: 10 }} />
                        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Adding</Text>
                    </View>
                    <Image source={data.user?.avatar} style={{ borderRadius: 55, width: 55, height: 55 }} />
                </View>
                <View style={{ position: 'relative', marginTop: 10, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#F0F3F4', borderRadius: 25, height: 50 }}>
                    <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: returnOption(), width: '100%', height: '100%', top: 0, left: 0, borderRadius: 25, overflow: 'hidden' }}>
                        <Image source={bg} style={{ width: '33%', height: '100%', borderRadius: 25 }} />
                    </View>
                    <TouchableOpacity onPress={() => setCurrentOption(options.ADD_FRIEND)} style={{ width: '33%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '700', fontSize: 15, color: currentOption === options.ADD_FRIEND ? 'white' : 'black' }}>Add Friends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentOption(options.CREATE_GROUP)} style={{ width: '33%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '700', fontSize: 15, color: currentOption === options.CREATE_GROUP ? 'white' : 'black' }}>Create Group</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentOption(options.FRIEND_REQUEST)} style={{ width: '33%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '700', fontSize: 15, color: currentOption === options.FRIEND_REQUEST ? 'white' : 'black' }}>Requests</Text>
                    </TouchableOpacity>
                </View>
                {currentOption === options.ADD_FRIEND ?
                    <AddFriendLayout />
                    :
                    currentOption === options.CREATE_GROUP ?
                        <CreateGroupLayout />
                        :
                        <FriendsRequestLayout />
                }
            </View>
            <Menu />
        </View>
    )
}

export default AddingScreen;
