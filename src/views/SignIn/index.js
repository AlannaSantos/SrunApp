import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

import { signIn } from '../../config/Api'
//import UserContext from '../../context/UserContext';
import Input from '../../components/Input';

export default function SignIn(){
    //const { dispatch: userDispatch } = React.useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField] = React.useState('');
    const [passwordField, setPasswordField] = React.useState('');
    
    const handleLogin = async () => {
        if(emailField != '' && passwordField != ''){
            let result = await signIn(emailField, passwordField);
            if(result.token){
                await AsyncStorageLib.setItem('token', result.token);

                /*userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: json.data.avatar
                    }
                });*/

                navigation.reset({
                    routes:[{ name: 'MainTab'}]
                });

            }else{
                alert("E-mail e/ou senha inválidos!");
            }
        }else{
            alert("Preencha os dados");
        }
    }
    
    const handleSignUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <View style={css.container}>
            <Text>Entrou na tela</Text>
            <Input
                placeholder="Digite seu e-mail"
                onChangeText={t=>setEmailField(t)}
                value={emailField}
            />
            <TextInput style={css.inputArea}
                placeholder="Digite sua senha"
                onChangeText={t=>setPasswordField(t)}
                value={passwordField}
                secureTextEntry={true}
            />
            <TouchableOpacity
                onPress={handleLogin} 
                style={css.btnLogin}>
                <Text>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={handleSignUp}
                style={css.btnSignUp}>
                <Text style={css.btnText}>Ainda não possui uma conta?</Text>
                <Text style={css.btnText}> Cadastre-se</Text>
            </TouchableOpacity>
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
    inputArea: {
        width: '80%',
        height: 60,
        margin: 10,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#F8F8F8',
    },
    btnLogin: {
        width: '80%',
        height: 50,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        margin: 10,
        padding: 10
    },
    btnSignUp: {
        flexDirection: 'row',
        alignItems: "center",
        position: 'absolute',
        padding: 4,
        bottom: 0,
        marginBottom: 60,
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});