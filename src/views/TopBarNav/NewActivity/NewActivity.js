import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { GlobalAppContext } from '../../../context/GlobalAppContext';

export default function NewActivity(){
    const { userData } = React.useContext(GlobalAppContext);
    //console.log(userData);
    return (
        <View style={css.container}>
            <Text>NewActivity { userData && userData.firstname }</Text>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})