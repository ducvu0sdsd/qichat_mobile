import React, { useContext, useEffect, useState } from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import avatar from '../assets/avatar.jpg'
import bg from '../assets/bg-dung.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { messageContext } from '../context/messageContext';
import { globalContext } from '../context/globalContext';
import { formatDateOfBirth } from '../utils/time';
import { launchImageLibrary } from 'react-native-image-picker';
import Spinner from '../components/spinner';
import DateTimePicker from '@react-native-community/datetimepicker';
import maleIcon from '../assets/male.png'
import femaleIcon from '../assets/female.png'


const InformationUserScreen = () => {
    const [user, setUser] = useState()
    const { messageData } = useContext(messageContext)
    const { data, handler } = useContext(globalContext)
    const navigation = useNavigation();
    const [imageUri, setImageUri] = useState(data.user?.avatar);
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false)
    const [gender, setGender] = useState()

    useEffect(() => {
        setUser(data.user)
        setDate(new Date(data.user.dateOfBirth))
        setDateOfBirth(new Date(data.user.dateOfBirth))
    }, [data.user])

    const openGallery = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(options, (response) => {

            const source = { uri: response.assets[0].uri };
            setImageUri(source.uri);
        });
    };



    return (
        <View style={{ paddingHorizontal: 15, position: 'relative', width: '100%', paddingTop: 30, backgroundColor: 'white', height: '100%' }}>
            {(showPicker || showSpinner) && (
                <TouchableOpacity onPress={() => { setShowPicker(false); setShowSpinner(false) }} style={{ height: '100%', width: '100%', position: 'absolute', zIndex: 10, backgroundColor: '#b2b2b263' }} />
            )}
            {showSpinner && (<Spinner setValue={setGender} setShow={setShowSpinner} data={[{ name: 'Male', icon: maleIcon }, { name: 'Female', icon: femaleIcon }]} />)}
            {showPicker && (
                <View style={{ flexDirection: 'column', alignItems: 'center', position: 'absolute', backgroundColor: 'white', left: 50, zIndex: 50, borderRadius: 30 }}>
                    <DateTimePicker
                        mode="date"
                        display="spinner"
                        value={date}
                        onChange={({ type }, selectedDate) => {
                            if (type === "set") {
                                setDateOfBirth(selectedDate)
                                if (Platform.OS === 'android') {
                                    setDateOfBirth(selectedDate)
                                    setShowPicker(false)
                                    setShowPicker(false)
                                }
                            } else {
                                setShowPicker(false)
                            }
                        }}
                    />
                    {Platform.OS === 'ios' && (
                        <View style={{ paddingVertical: 10, flexDirection: 'column', justifyContent: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setShowPicker(false)}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            )}
            <View style={{ alignItems: 'flex-start' }}>
                <TouchableOpacity onPress={() => navigation.navigate('MessageScreen')}>
                    <Icon name='arrow-left' style={{ color: 'black', fontSize: 30, marginRight: 10 }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 9, width: '100%' }}>
                    <View style={{ top: 35 }}>
                        <View>
                            <Image source={{ uri: imageUri }} style={{ borderRadius: 55, width: 120, height: 120 }} />
                            <TouchableOpacity onPress={openGallery} style={{ position: 'absolute', top: 0, right: -10 }}>
                                <Icon name='pencil' style={{ color: '#999', fontSize: 19 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 40 }}>
                        <Text style={{ fontSize: 25, fontWeight: '600' }}>{data.user?.fullName}</Text>
                    </View>
                </View>
            </View>


            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 19, fontWeight: '600' }}>FullName</Text>
                <TextInput value={data.user?.fullName} style={{ borderWidth: 1, borderColor: '#999', borderRadius: 8, paddingLeft: 10, paddingRight: 40, fontSize: 15, height: 45, marginTop: 7, width: '100%' }} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 19, fontWeight: '600' }}>Date of Birth</Text>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, fontSize: 16, borderRadius: 8, backgroundColor: 'white', width: '100%', marginTop: 7, borderWidth: 1, borderColor: '#999', height: 45 }} onPress={() => setShowPicker(true)}>
                    <Text style={{ color: '#999' }}>
                        {dateOfBirth.getDate() + "/" + (dateOfBirth.getMonth() + 1) + "/" + dateOfBirth.getFullYear()}
                    </Text>
                </TouchableOpacity>
            </View>

            {
                user?.phone &&
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 19, fontWeight: '600' }}>Phone</Text>
                    <TextInput value={user?.phone} style={{ borderWidth: 1, borderColor: '#999', borderRadius: 8, paddingLeft: 10, paddingRight: 40, fontSize: 15, height: 45, marginTop: 7, width: '100%' }} />
                </View>
            }
            {
                user?.email &&
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 19, fontWeight: '600' }}>Email</Text>
                    <TextInput value={user?.email} style={{ borderWidth: 1, borderColor: '#999', borderRadius: 8, paddingLeft: 10, paddingRight: 40, fontSize: 15, height: 45, marginTop: 7, width: '100%' }} />
                </View>
            }

            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 19, fontWeight: '600' }}>Gender</Text>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, fontSize: 16, borderRadius: 8, backgroundColor: 'white', width: '100%', marginTop: 7, borderColor: '#999', height: 45, borderWidth: 1 }} onPress={() => setShowSpinner(true)}>
                    <Text style={{ color: '#999' }}>
                        {gender ? gender : 'Choose Gender'}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 19, fontWeight: '600' }}>Bio</Text>
                <TextInput value={data.user?.bio} style={{ borderWidth: 1, borderColor: '#999', borderRadius: 8, paddingLeft: 10, paddingRight: 40, fontSize: 15, height: 45, marginTop: 7, width: '100%' }} />
            </View>

            <TouchableOpacity style={{ marginTop: 20, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', borderRadius: 10, backgroundColor: '#FF6E6E', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, color: 'white' }}>Change</Text>
            </TouchableOpacity>
        </View >
    )
}

export default InformationUserScreen

