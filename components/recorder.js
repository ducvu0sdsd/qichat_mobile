import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

const Recorder = ({ sendMessage, setFiles }) => {
    const [recording, setRecording] = useState()
    const [sound, setSound] = useState()
    const [playing, setPlaying] = useState(false)

    async function startRecording() {
        try {
            const perm = await Audio.requestPermissionsAsync();
            if (perm.status === "granted") {
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    playsInSilentModeIOS: true
                });
                const { recording } = await Audio.Recording.createAsync({
                    ...Audio.RecordingOptionsPresets.HIGH_QUALITY,
                    outputFormat: ".mp3"
                });
                setRecording(recording);
            }
        } catch (err) { }
    }

    async function stopRecording() {
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        setSound(sound.getURI)
        sound.replayAsync()
        const base64 = await FileSystem.readAsStringAsync(recording.getURI(), {
            encoding: FileSystem.EncodingType.Base64,
        });
        setFiles([
            {
                base64,
                originalname: 'voice.mp3',
                uri: recording.getURI(),
                mimetype: 'audio/mp3',
                size: 0
            }
        ]);
    }

    return (
        <View style={{ marginBottom: 15, marginTop: 5, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {playing === true ?
                <TouchableOpacity onPress={() => {
                    setPlaying(false);
                    stopRecording()
                }} style={{ position: 'absolute', left: 15, top: 10, zIndex: 1, marginRight: 5 }}>
                    <Icon name='pause' style={{ color: '#999', fontSize: 30, top: -3 }} />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => {
                    setPlaying(true);
                    startRecording()
                }} style={{ position: 'absolute', left: 15, top: 10, zIndex: 1, marginRight: 5 }}>
                    <Icon name='play' style={{ color: '#999', fontSize: 30, top: -3 }} />
                </TouchableOpacity>
            }
            <View style={{ paddingLeft: 45, paddingRight: 73, fontSize: 15, height: 45, width: '98%', backgroundColor: '#F4F4F4', borderRadius: 25, justifyContent: 'center' }}>
                <Text>
                    {playing === true ? "Recording" : "Recorded"}
                </Text>
            </View>
            {playing === false && (
                <View style={{ position: 'absolute', top: 10, right: 10, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => sendMessage()}>
                        <Icon name='reload' style={{ color: '#999', fontSize: 26, marginRight: 5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Icon name='close' style={{ color: '#999', fontSize: 26, marginRight: 5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Icon name='send' style={{ color: '#999', fontSize: 26, marginRight: 5 }} />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default Recorder