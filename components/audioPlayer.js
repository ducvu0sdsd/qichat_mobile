import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AudioPlayer = ({ url, style }) => {

    const [playing, setPlaying] = useState(false)
    const [sound, setSound] = useState();

    useEffect(() => {
        Audio.Sound.createAsync({ uri: url })
            .then(res => {
                setSound(res.sound)
            })
    }, [url])

    const onPlaybackStatusUpdate = (status) => {
        if (status.didJustFinish) {
            sound.replayAsync(); // Lặp lại audio khi phát hết
        }
    };


    const play = async () => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
            await sound?.playAsync()
            setPlaying(true)
        }
    }

    const pause = async () => {
        if (sound) {
            await sound?.pauseAsync()
            setPlaying(false)
        }
    }

    return (
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', paddingVertical: 5 }}>
            {playing ?
                <TouchableOpacity onPress={() => pause()} style={{}}>
                    <Icon name='pause' style={{ color: '#999', fontSize: 35 }} />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => play()} style={{}}>
                    <Icon name='play' style={{ color: '#999', fontSize: 35 }} />
                </TouchableOpacity>
            }
            <View style={{ flexDirection: 'row' }}>
                <Icon name='equalizer' style={{ color: 'rgba(153, 153, 153, 0.6)', fontSize: 28, marginRight: -6 }} />
                <Icon name='equalizer' style={{ color: 'rgba(153, 153, 153, 0.6)', fontSize: 28, marginRight: -6 }} />
                <Icon name='equalizer' style={{ color: 'rgba(153, 153, 153, 0.6)', fontSize: 28, marginRight: -6 }} />
                <Icon name='equalizer' style={{ color: 'rgba(153, 153, 153, 0.6)', fontSize: 28 }} />
            </View>

        </View>
    )
}

export default AudioPlayer