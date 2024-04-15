import React, { useContext, useEffect, useState } from 'react'
import { createContext } from "react";
import { globalContext } from './globalContext';
import { TypeHTTP, api, baseURL } from '../utils/api';
import { useRoute } from '@react-navigation/native';

export const messageContext = createContext()

const MessageContext = ({ children }) => {
    const [currentRoom, setCurrentRoom] = useState()
    const [messages, setMessages] = useState([])
    const [reply, setReply] = useState()
    const [rooms, setRooms] = useState([])
    const { data } = useContext(globalContext)

    const messageData = {
        currentRoom,
        messages,
        reply,
        rooms
    }

    const messageHandler = {
        setCurrentRoom,
        setMessages,
        setReply,
        setRooms
    }

    // useEffect(() => {
    //     if (data.user?._id) {
    //         // api({ type: TypeHTTP.GET, sendToken: true, path: `/friends-operating/${data.user?._id}` })
    //         //     .then(users => {
    //         //         setFriendsOperation(users)
    //         //     })
    //         socket.on('update-operation-rooms', (body) => {
    //             if (body.friends_id?.includes(data.user?._id)) {
    //                 api({ type: TypeHTTP.GET, path: `/rooms/${data.user?._id}`, sendToken: true })
    //                     .then(rooms => {
    //                         setRooms(rooms)
    //                     })
    //             }
    //         })
    //         socket.on('update-operation-friends', (body) => {
    //             if (body.friends_id?.includes(data.user?._id)) {
    //                 api({ type: TypeHTTP.GET, sendToken: true, path: `/friends-operating/${data.user?._id}` })
    //                     .then(users => setFriendsOperation(users))
    //             }
    //         })
    //     }

    //     return () => {
    //         socket.off('update-operation-rooms')
    //         socket.off('update-operation-friends')
    //     }
    // }, [data.user?._id])

    useEffect(() => {
        if (currentRoom?._id)
            api({ type: TypeHTTP.GET, path: `/get-messages-by-room/${currentRoom?._id}`, sendToken: true })
                .then(messages => {
                    setMessages(messages)
                })
                .catch(error => console.log(error))
    }, [currentRoom, data.user?._id])

    return (
        <messageContext.Provider value={{ messageData, messageHandler }}>
            {children}
        </messageContext.Provider>
    )
}

export default MessageContext