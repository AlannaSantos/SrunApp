import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function ListActivitys(){
    return (
        <View style={css.container}>
            <Text>ListActivitys</Text>
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