import React, { createContext, useState } from 'react'
export const GlobalAppContext = createContext();

export const GlobalContext = ({ children }) => {
    const [userData, setUserData] = useState({});

    return (
        <GlobalAppContext.Provider value={{ userData, setUserData }}>
            {children}
        </GlobalAppContext.Provider>
    );
} 