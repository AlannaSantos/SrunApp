import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function Input({ placeholder, value, onChangeText }){
    return (
        <TextInput style={css.inputArea}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    )
}

const css = StyleSheet.create({
    inputArea: {
        width: '80%',
        height: 60,
        margin: 10,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#F8F8F8',
    }
});