import React from 'react'
//import { initialState, UserReducer } from '../reducers/UserReduces'
export const UserContext = React.createContext();

export default ({ children }) => {
    //const [state, dispatch] = React.useReducer(UserReducer, initialState);
    const [userData, setUserData] = React.useState(null);
    
    /*function userInformations(user){
        setUserData(user);
    }*/

    return (
        <UserContext.Provider value={{ /*state, dispatch,*/ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
} 