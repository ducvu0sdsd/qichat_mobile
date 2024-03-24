import React, { useState } from 'react';
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import bg from '../assets/bg-dung.jpg';
import banner from '../assets/banner.png';
import Logo from '../components/logo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DatePickerIOS } from 'react-native';

const InformationScreens = () => {
    const [chosenDate, setChosenDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setChosenDate(newDate);
    };

    return (
        <ImageBackground
            style={{ height: '100%', width: '100%', position: 'relative', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            source={bg}
        >
            <View style={{ position: 'absolute', top: 40, left: 20 }}>
                <Logo />
            </View>
            <Image
                style={{ width: 300, height: 230 }}
                source={banner} />
            <Text style={{ color: 'white', fontSize: 20, paddingHorizontal: 30, textAlign: 'center', marginVertical: 10 }}>{`We sent you an authentication code using your phone number ()`}</Text>
            <TextInput
                style={{ marginTop: 20, paddingHorizontal: 15, fontSize: 16, backgroundColor: 'white', borderRadius: 10, width: 300, borderColor: 'white', height: 45, borderWidth: 2 }}
                placeholder='FullName' />
            {/* <DatePickerIOS
                date={chosenDate}
                onDateChange={handleDateChange} // Handle date change
                mode="date"
            /> */}
            <TextInput
                style={{ marginTop: 10, paddingHorizontal: 15, fontSize: 16, backgroundColor: 'white', borderRadius: 10, width: 300, borderColor: 'white', height: 45, borderWidth: 2 }}
                placeholder='Bio' />
            <TouchableOpacity style={{ marginTop: 10 }}>
                <View style={{ paddingVertical: 7, borderRadius: 10, width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF6E6E' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins', color: 'white' }}>Submit</Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default InformationScreens;