import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import AsyncStorageLib from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
//import UserContext from '../../context/UserContext';
//import { } from '../../config/Api'

export default function SrunLogo(){
    //const { setUserData } = React.useContext(UserContext);
    const navigation = useNavigation(); //Hook de navegacao entre telas

    React.useEffect(() => { //Esse efeito ocorre toda vez q a tela for inicializada;
        const verifyToken = async () => { //Chamada assincrona para verificar se existe token no Storage;
            const asyncUser = await AsyncStorageLib.getItem('@Srun:user');
            const asyncToken = await AsyncStorageLib.getItem('@Srun:token');
            
            if(asyncUser && asyncToken){ //Verifica se exite token
                //console.log(asyncToken);
                //setUserData(JSON.parse(asyncUser));
                navigation.navigate('MainTab');
            }else{
                navigation.navigate('SignIn'); //Manda o usuario para a tela de login
            }
        }
        verifyToken();
    }, []); // Por enquanto, sem dependencia '[]';

    return (
        <View style={css.container}>
            <Text>Primeira tela</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        marginTop: '50px'
    }
});