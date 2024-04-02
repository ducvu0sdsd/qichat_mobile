import React from 'react'
import { Image, Text, View } from 'react-native'

const MessageSection = ({ style, information, avatar }) => {
    return (
        <View style={{ flexDirection: 'row', gap: 8, marginVertical: 3, alignItems: 'center' }}>
            {style === 'flex-start' && <Image source={{ uri: avatar }} style={{ borderRadius: 40, width: 40, height: 40 }} />}
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: style }}>
                <View style={{ backgroundColor: '#EFF5FD', width: 'auto', minHeight: 38, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, borderRadius: 10 }}>
                    <Text>{information}</Text>
                </View>
            </View>
        </View>
    )
}

export default MessageSection