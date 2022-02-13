import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function NewActivity(){
    return (
        <View style={css.container}>
            <Text>NewActivity</Text>
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