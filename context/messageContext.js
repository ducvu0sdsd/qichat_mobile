import React, { useContext, useEffect, useState } from 'react'
import { createContext } from "react";
import { globalContext } from './globalContext';
import { TypeHTTP, api } from '../utils/api';

export const messageContext = createContext()

const MessageContext = ({ children }) => {

    const [currentRoom, setCurrentRoom] = useState()
    const [messages, setMessages] = useState([])
    const { data } = useContext(globalContext)

    const messageData = {
        currentRoom,
        messages
    }

    const messageHandler = {
        setCurrentRoom,
        setMessages
    }

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