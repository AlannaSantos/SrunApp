import React, { useReducer } from 'react'
import { initialState, UserReducer } from '../reducers/UserReduces'
export const UserContext = React.createContext();

export default ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
} 