import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function UserConfig(){
    return (
        <View style={css.container}>
            <Text>UserConfig</Text>
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