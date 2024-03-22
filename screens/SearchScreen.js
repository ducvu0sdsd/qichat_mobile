import React, { useContext, useState } from 'react'
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import avatar from '../assets/avatar.jpg'
import bg from '../assets/bg.webp'
import Icon from 'react-native-vector-icons/Feather';
import Menu from '../components/menu'
import logo from '../assets/friends.png'
import logo1 from '../assets/groups.png'
import UserSearchGroup from '../components/userSearchGroup';
import { globalContext } from '../context/globalContext'
import UserSearch from '../components/userSearch';

const options = {
    FRIEND: 'a',
    GROUP: 'b'
}

const SearchScreen = () => {

    const { data } = useContext(globalContext)
    const [currentOption, setCurrentOption] = useState(options.FRIEND)
    const returnOption = () => {
        if (currentOption === options.FRIEND)
            return 'flex-start'

        if (currentOption === options.GROUP)
            return 'flex-end'
    }

    return (
        <>
            <View style={{ paddingHorizontal: 15, paddingTop: 50, paddingLeft: 30, height: '91%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>{currentOption === options.FRIEND ? "Search Friends" : "Search Groups"}</Text>
                    </View>
                    <Image source={avatar} style={{ borderRadius: 55, width: 55, height: 55 }}></Image>
                </View>
                <View style={{ position: 'relative', marginTop: 15, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#E0E0E0', borderRadius: 25, height: 50 }}>
                    <View style={{ position: 'absolute', flexDirection: 'row', width: '100%', height: '100%', justifyContent: returnOption(), top: 0, left: 0, borderRadius: 25, overflow: 'hidden' }}>
                        <Image source={bg} style={{ width: '50%', height: '100%', borderRadius: 25 }} />
                    </View>
                    <TouchableOpacity onPress={() => setCurrentOption(options.FRIEND)} style={{ width: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={logo} style={{ width: 20, height: 35, marginRight: 5 }}></Image>
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: 16, color: currentOption === options.FRIEND ? 'white' : 'black' }}>Friends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentOption(options.GROUP)} style={{ width: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={logo1} style={{ width: 35, height: 35, marginRight: 5 }}></Image>
                        <Text style={{ fontWeight: '800', fontSize: 16, color: currentOption === options.GROUP ? 'white' : 'black' }}>Groups </Text>
                    </TouchableOpacity>

                </View>
                <View >
                    <View style={{ marginTop: 25, flexDirection: 'row', borderRadius: 15, alignItems: 'center', borderColor: '#cccccc', borderWidth: 1, }}>
                        <Icon style={{ position: 'absolute', top: '25%', marginLeft: 15, fontSize: 25, color: '#999' }} name='search'  ></Icon>
                        <TextInput placeholder='Search...' style={{ paddingLeft: 25, paddingRight: 10, height: 45, marginLeft: 20 }}  >
                        </TextInput>

                    </View>

                </View>
                {currentOption === options.FRIEND ?
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20, marginHorizontal: 5 }}>
                        <UserSearch />
                        <UserSearch />
                        <UserSearch />
                        <UserSearch />
                        <UserSearch />
                        <UserSearch />
                        <UserSearch />
                        <UserSearch />
                        <UserSearch />
                    </ScrollView>
                    :
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20, marginHorizontal: 5 }}>
                        <UserSearchGroup />
                        <UserSearchGroup />
                        <UserSearchGroup />
                        <UserSearchGroup />
                        <UserSearchGroup />
                        <UserSearchGroup />
                        <UserSearchGroup />
                        <UserSearchGroup />
                        <UserSearchGroup />
                        <UserSearchGroup />
                    </ScrollView>
                }
            </View >
            <Menu />
        </>

    )
}

export default SearchScreen