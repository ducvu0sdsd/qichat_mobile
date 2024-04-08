import React, { useContext, useEffect, useState } from 'react'
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import { View } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserIcon from '../components/userIcon';
import { useNavigation, useRoute } from '@react-navigation/native'
import { messageContext } from '../context/messageContext';
import bg from '../assets/bg.webp'
import { globalContext } from '../context/globalContext';
import { returnID, returnImage, returnName, returnRemainingObject } from '../utils/room';
import { tinhSoPhutCham } from '../utils/time';
import { TypeHTTP, api } from '../utils/api';
import { fileTypes } from '../components/messageSection';
import VideoPlayer from '../components/videoPlayer';


const MessageInformationScreen = () => {
    const navigation = useNavigation();
    const { data, handler } = useContext(globalContext)
    const { messageData } = useContext(messageContext)
    const [medias, setMedias] = useState([])
    const [files, setFiles] = useState([])

    useEffect(() => {
        api({ type: TypeHTTP.GET, sendToken: true, path: `/messages/media/${messageData.currentRoom?._id}` })
            .then(media => {
                setMedias(media)
            })
        api({ type: TypeHTTP.GET, sendToken: true, path: `/messages/files/${messageData.currentRoom?._id}` })
            .then(files => {
                setFiles(files)
            })
    }, [messageData.currentRoom])

    const route = useRoute()
    useEffect(() => {
        handler.checkToken(route.name)
            .then(goal => {
                if (goal !== null)
                    navigation.navigate(goal)
            })
    }, [])

    return (
        <View style={{ paddingHorizontal: 15, width: '100%', paddingTop: 30, backgroundColor: 'white', height: '100%' }}>
            <View style={{ position: 'absolute', top: 40, left: 20, zIndex: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
                    <Icon name='arrow-left' style={{ color: 'black', fontSize: 30, marginRight: 10 }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 9, width: '100%' }}>
                    <View style={{ top: 35 }}>
                        <View style={{ flexDirection: 'column', gap: 5, alignItems: 'center' }}  >
                            <UserIcon size={110} avatar={returnImage(messageData.currentRoom, data.user)} />
                            <Text style={{ fontSize: 22, fontWeight: 600 }}>{returnName(messageData.currentRoom, data.user)}</Text>
                            <Text style={{ fontSize: 15, fontWeight: '600' }}>{
                                messageData.currentRoom.type === 'Single' ?
                                    data.user.friends.map(user => user._id).includes(returnID(messageData.currentRoom, data.user)) ?
                                        returnRemainingObject(messageData.currentRoom, data.user).operating.status === true ?
                                            "Online"
                                            :
                                            `Operated in ${tinhSoPhutCham(returnRemainingObject(messageData.currentRoom, data.user).operating.time) ? tinhSoPhutCham(returnRemainingObject(messageData.currentRoom, data.user).operating.time) : '0 second'} ago`
                                        :
                                        "Stranger"
                                    :
                                    `${messageData.currentRoom.users.length} Participants`
                            }</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 50 }}>
                <Text style={{ fontSize: 22, fontWeight: '600' }}>Attachments</Text>
                <View style={{ paddingLeft: 10 }}>
                    {files.map((file, index) => {
                        if (file.url.split('___')[0].split('/')[file.url.split('___')[0].split('/').length - 1] !== 'audio') {
                            return <TouchableOpacity key={index} style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center', gap: 10 }}>
                                <Image style={{ width: 35, aspectRatio: 1 }} source={fileTypes[file.url.split('___')[0].split('/')[file.url.split('___')[0].split('/').length - 1]]} />
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>{`${file.name.substring(0, 25)}${file.name.length >= 25 ? '...' : `.${file.url.split('___')[0].split('/')[file.url.split('___')[0].split('/').length - 1]}`}`}</Text>
                            </TouchableOpacity>
                        }
                    })}
                </View>
                <TouchableOpacity style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ borderRadius: 10, overflow: 'hidden', width: 200 }}>
                        <ImageBackground source={bg} style={{ width: '100%', paddingVertical: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ fontSize: 14, color: 'white' }}>See All</Text>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{ marginTop: 25 }}>
                <Text style={{ fontSize: 22, fontWeight: '600' }}>Pictures & Videos</Text>
                <View style={{ flexDirection: 'row', width: '100%', gap: 10, paddingVertical: 10, justifyContent: 'start', flexWrap: 'wrap' }}>
                    {medias.map((media, index) => {
                        if (media.url.includes("/image___")) {
                            return <TouchableOpacity>
                                <Image key={index} source={{ uri: media.url }} style={{ width: 90, height: 90, borderRadius: 10 }} />
                            </TouchableOpacity>
                        }
                        if (media.url.includes("/video___")) {
                            return <TouchableOpacity style={{ backgroundColor: '#999', borderRadius: 10 }}>
                                <VideoPlayer key={index} url={media.url} style={{ width: 90, height: 90 }} />
                            </TouchableOpacity>
                        }
                    })}
                </View>
            </View>
            <TouchableOpacity style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ borderRadius: 10, overflow: 'hidden', width: 200 }}>
                    <ImageBackground source={bg} style={{ width: '100%', paddingVertical: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontSize: 14, color: 'white' }}>See All</Text>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        </View >

    )
}

export default MessageInformationScreen