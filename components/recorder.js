import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Recorder = () => {

    const [playing, setPlaying] = useState(false)

    return (
        <View style={{ marginBottom: 15, marginTop: 5, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {playing === true ?
                <TouchableOpacity onPress={() => setPlaying(false)} style={{ position: 'absolute', left: 15, top: 10, zIndex: 1, marginRight: 5 }}>
                    <Icon name='pause' style={{ color: '#999', fontSize: 30, top: -3 }} />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => setPlaying(true)} style={{ position: 'absolute', left: 15, top: 10, zIndex: 1, marginRight: 5 }}>
                    <Icon name='play' style={{ color: '#999', fontSize: 30, top: -3 }} />
                </TouchableOpacity>
            }
            <TextInput placeholder='Type your message...' style={{ paddingLeft: 45, paddingRight: 73, fontSize: 15, height: 45, width: '98%', backgroundColor: '#F4F4F4', borderRadius: 25 }} />
            <View style={{ position: 'absolute', top: 10, right: 10, flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Icon name='send' style={{ zIndex: 1, color: '#999', fontSize: 26, marginRight: 5 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Recorder