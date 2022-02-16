import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorageLib  from '@react-native-async-storage/async-storage';

export default function UserConfig(){
    const navigation = useNavigation();

    const handleLogout = async() => {
        try {
            await AsyncStorageLib.removeItem('@Srun:user');
            await AsyncStorageLib.removeItem('@Srun:token');
        }
        catch(exception) {
            return false;
        }
        navigation.navigate('SignIn');
    }

    return (
        <View style={css.container}>
            <Text>UserConfig</Text>
            <TouchableOpacity onPress={handleLogout}>
                <Text>Deslogar</Text>
            </TouchableOpacity>
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