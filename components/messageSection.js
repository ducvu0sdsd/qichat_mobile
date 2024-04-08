import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6';
import docx from '../assets/docx.png'
import excel from '../assets/excel.png'
import file from '../assets/file.png'
import pdf from '../assets/pdf.png'
import { Video } from 'expo-av'
import VideoPlayer from './videoPlayer'
import AudioPlayer from './audioPlayer'

export const fileTypes = {
    docx: docx,
    excel,
    file,
    pdf
}

const MessageSection = ({ style, information, avatar, disabled }) => {
    if (disabled) {
        return <View style={{ flexDirection: 'row', gap: 8, marginVertical: 5, alignItems: 'center' }}>
            {style === 'flex-start' && <Image source={{ uri: avatar }} style={{ borderRadius: 40, width: 40, height: 40 }} />}
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: style }}>
                <View style={{ backgroundColor: '#f5f5f5c3', maxWidth: '45%', minHeight: 38, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingHorizontal: 15, borderRadius: 10 }}>
                    <Icon name='delete-left' style={{ color: '#999', fontSize: 17, marginRight: 10 }} />
                    <Text>Has been revoked</Text>
                </View>
            </View>
        </View>
    } else {
        if (!information[0].url) {
            return (
                <View style={{ flexDirection: 'row', gap: 8, marginVertical: 10, alignItems: 'center' }}>
                    {style === 'flex-start' && <Image source={{ uri: avatar }} style={{ borderRadius: 40, width: 40, height: 40 }} />}
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: style }}>
                        <View style={{ backgroundColor: '#f5f5f5c3', maxWidth: '65%', minHeight: 35, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10 }}>
                            <Text style={{ lineHeight: 22, fontSize: 16 }}>{information + ""}</Text>
                        </View>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{ flexDirection: 'row', gap: 8, marginVertical: 10, alignItems: 'center' }}>
                    {style === 'flex-start' && <Image source={{ uri: avatar }} style={{ borderRadius: 40, width: 40, height: 40 }} />}
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: style }}>
                        <View style={{ backgroundColor: '#f5f5f5c3', maxWidth: '45%', overflow: 'hidden', minHeight: 38, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, justifyContent: 'center', borderRadius: 10 }}>
                            {information.map((item, index) => {
                                if (item.url.includes('/image___')) {
                                    return <Image
                                        key={index}
                                        style={{
                                            width: information.length === 1 ? '100%' : information.length === 2 ? '50%' : '33.33%',
                                            aspectRatio: 1,
                                            borderRadius: 10,
                                            margin: 5,
                                        }}
                                        source={{ uri: item.url }}
                                    />
                                } else if (item.url.includes('/video___')) {
                                    return <VideoPlayer key={index} url={item.url} style={{ width: 300, height: 300 }} />
                                } else if (item.url.includes('/audio___')) {
                                    return <AudioPlayer key={index} url={item.url} style={{}} />
                                } else {
                                    const type = item.url.split('___')[0].split('/')[item.url.split('___')[0].split('/').length - 1]
                                    return <TouchableOpacity key={index} style={{ flexDirection: 'row', alignItems: 'center', gap: 5, paddingVertical: 10, width: '100%' }}>
                                        <Image source={fileTypes[type]} style={{ width: 50, aspectRatio: 1 }} />
                                        <View style={{ flexDirection: 'column', width: 300, gap: 1 }}>
                                            <Text style={{ lineHeight: 18, fontSize: 13, fontWeight: '700' }}>{`${item.name}.${type}`.length >= 13 ? `${item.name}.${type}`.substring(0, 13) + "..." : `${item.name}.${type}`}</Text>
                                            <Text style={{ fontSize: 10, fontWeight: '600' }}>{`${item.size >= 1024 ? `${(item.size / 1024).toFixed(2)} MB` : `${item.size} KB`}`}</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                            })}
                        </View>
                    </View>
                </View>
            )
        }
    }
}

export default MessageSection