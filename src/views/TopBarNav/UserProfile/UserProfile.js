import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function UserProfile(){
    return (
        <View style={css.container}>
            <Text>UserProfile</Text>
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