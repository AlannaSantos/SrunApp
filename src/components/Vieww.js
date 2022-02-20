import React from 'react';
import { View, Text } from 'react-native';

export default function Vieww({ lbl, lblValue }){
    return (
        <View style={{flexDirection: 'row', marginTop: 5}}>
            <View style={{flex: 1, height: 50, borderBottomWidth: 1, borderColor: '#D3D3D3' }}>
                <Text style={{ padding: 12}}>{lbl}</Text>
            </View>
            <View style={{flex: 1, height: 50, borderBottomWidth: 1, borderColor: '#D3D3D3'}}>
                <Text style={{ padding: 12, textAlign: 'right'}}>{lblValue}</Text>
            </View>
        </View>
    )
}