import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, TextInput } from 'react-native';
import UserIcon from '../userIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Phone from 'react-native-vector-icons/SimpleLineIcons';
import bg from '../../assets/bg-vuong.png';
import avatar from '../../assets/avatar.jpg';

const AddFriendLayout = () => {
    const [users, setUsers] = useState([])
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');

    const handleNameInputChange = (text) => {
        setNameInput(text);
        setEmailInput('');
        setPhoneInput('');
    };

    const handleEmailInputChange = (text) => {
        setEmailInput(text);
        setNameInput('');
        setPhoneInput('');
    };

    const handlePhoneInputChange = (text) => {
        setPhoneInput(text);
        setNameInput('');
        setEmailInput('');
    };
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
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <View style={{ borderWidth: 1, borderColor: '#999', padding: 10, borderRadius: 10, top: 20, width: '80%', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='web' style={{ fontSize: 22, marginRight: 10, color: '#999' }} />
                    <TextInput
                        style={{ fontSize: 14, fontWeight: '400', color: '#999', flex: 1 }}
                        placeholder="Add Friend By Name"
                        value={nameInput}
                        onChangeText={() => handleNameInputChange()}
                    />
                </View>
            </View>
            {/* {users.length !== 0 ?
                users.map((user, index) => (
                    <TouchableOpacity onPress={() => handler.showUserInformation(user)} key={index} style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                        <UserIcon avatar={user.avatar} operating={user.operating.status} />
                        <Text style={{ fontWeight: '600', fontSize: 14, marginLeft: 10 }}>{user.fullName}</Text>
                        {data.user.friends.map(item => item._id).includes(user._id) &&
                            (<View style={{ marginLeft: 'auto', paddingHorizontal: 8, paddingVertical: 4, backgroundColor: 'green', borderRadius: 8 }}>
                                <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'white' }}>Friend</Text>
                            </View>)
                        }
                    </TouchableOpacity>
                ))
                :
                <View style={{ alignItems: 'center', marginTop: 50 }}>
                    <Text style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: 20, color: '#999' }}>Not Found Friends</Text>
                </View>
            } */}
        </View>

    );
};

export default AddFriendLayout;