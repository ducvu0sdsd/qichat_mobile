import React, { createContext, useState } from 'react'

export const globalContext = createContext()

const GlobalContext = ({ children }) => {

    const [user, setUser] = useState()

    const data = {
        user
    }

    const handler = {
        setUser
    }

    return (
        <globalContext.Provider value={{ data, handler }}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalContext