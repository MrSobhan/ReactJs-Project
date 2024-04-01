import React, { createContext } from 'react';

export const userNameContext = createContext()

export const UsernameProvider = ({ children , value }) => {
    return(
        <userNameContext.Provider value={value}>
        {children}
    </userNameContext.Provider>
    )
}

