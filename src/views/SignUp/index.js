import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

import { signUp } from '../../config/Api'
import UserContext from '../../context/UserContext';

export default function SignUp(){
    const { dispatch: userDispatch } = React.useContext(UserContext);
    const navigation = useNavigation();

    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [emailField, setEmailField] = React.useState('');
    const [passwordField, setPasswordField] = React.useState('');
    const [confirmpassword, setConfirmpassword] = React.useState('');
    
    const handleCreate = async () => {
        if(firstname != '' && lastname != '' && emailField != '' && passwordField != '' && confirmpassword != ''){
            if(passwordField != confirmpassword){
                alert("As senhas não coincidem !");
            }else{
                let result = await signUp(firstname, lastname, emailField, passwordField);
                if(result.token){
                    await AsyncStorageLib.setItem('token', result.token);

                    /*userDispatch({
                        type: 'setAvatar',
                        payload:{
                            avatar: json.data.avatar
                        }
                    });*/

                    navigation.reset({
                        routes:[{ name: 'MainUserScreen'}]
                    });
                }else{
                    alert("E-mail e/ou senha inválidos!");
                }
            }
            
        }else{
            alert("Preencha os dados");
        }
    }
    
    const handleSignIn = () => {
        navigation.navigate('SignIn');
    }

    return (
        <View style={css.container}>
            <TextInput style={css.inputArea}
                placeholder="Digite seu nome"
                onChangeText={t=>setFirstname(t)}
                value={firstname}
            />
            <TextInput style={css.inputArea}
                placeholder="Digite seu sobrenome"
                onChangeText={t=>setLastname(t)}
                value={lastname}
            />
            <TextInput style={css.inputArea}
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

            <TextInput style={css.inputArea}
                placeholder="Confirme sua senha"
                onChangeText={t=>setConfirmpassword(t)}
                value={confirmpassword}
                secureTextEntry={true}
            />
            <TouchableOpacity
                onPress={handleCreate} 
                style={css.btnCreate}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={handleSignIn}
                style={css.btnSignIn}>
                <Text style={css.btnText}>Já possui uma conta?</Text>
                <Text style={css.btnText}> Faça seu login!</Text>
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
    btnCreate: {
        width: '80%',
        height: 50,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        margin: 10,
        padding: 10
    },
    btnSignIn: {
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