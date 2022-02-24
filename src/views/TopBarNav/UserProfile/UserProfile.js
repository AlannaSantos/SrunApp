import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {useNavigation} from "@react-navigation/native";

export default function UserProfile({navigation}){

    const [image, setImage] = React.useState(null);
    const [userData, setUserData] = React.useState(null);

    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        if(!result.cancelled){
            setImage(result);
        }
    }
    React.useEffect(() => {
        const mostrarNome = async () => {
            const storaged = await AsyncStorageLib.getItem('@Srun:user');
            setUserData(JSON.parse(storaged));
        }
        mostrarNome();
    }, []);
   // console.log(image);
    //'https://as1.ftcdn.net/v2/jpg/01/40/46/18/1000_F_140461899_dvRngd7xvZtqCUHLiIyRjgflq2EmwnVP.jpg'

    return (
        <>
            <View style={css.container} >
                <View style={header.view}>
                    <Text style={header.text}>{ userData && userData.firstname +' '+ userData.lastname }</Text>
                </View>
                <TouchableOpacity onPress={pickImage} style={header.touchableOpacity}>
                    <Text style={{color:'#808080'}}>Pick an Image</Text>
                    {image && <Image
                        source={{
                           uri:`data:image/jpg;base64,${image.base64}`
                        }} style={header.avatar} /> }
                </TouchableOpacity>
                <View style={header.textView}>
                    <Text style={header.text}> E-mail: { userData && userData.email }</Text>
                </View>
                <View style={header.textView}>
                    <Text style={header.text}> Gênero: { userData && ''}</Text>
                </View>
                <View style={header.textView}>
                    <Text style={header.text}> Data de Nascimento: { userData && '' }</Text>
                </View>
                <View style={header.touchableOpacity}>
                    <Text style={header.text}> Peso: { userData && '' }</Text>
                </View>
                <View style={header.touchableOpacity}>
                    <Text style={header.text}> Altura: { userData && '' }</Text>
                </View>
            </View>
                <TouchableOpacity style={footer.btnEdit} onPress={() => navigation.navigate("RegisterUser")} >
                    <Text style={footer.lblBtnEdit}>EDITAR CONTA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={footer.btnActivity} onPress={()=> navigation.navigate("ListActivitySchedule")}>
                    <Text style={footer.lblBtnActivity}>MINHAS ATIVIDADES</Text>
                </TouchableOpacity>
        </>
    )
}

const css = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
    },
});
const header = StyleSheet.create({
    view: {
        width: '50%',
        paddingTop: 50,
        borderBottomWidth: 2,
        borderColor: '#D3D3D3',

    },
    text: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 16,
    },
    touchableOpacity:{
        width: '50%',
        paddingTop: 12,
        borderBottomWidth: 2,
        borderColor: '#D3D3D3'

    },
    avatar:{
       width:100,
        height:100,
        borderRadius: 50
    },
    textView:{
        width:'100%',
        paddingTop: 12,
        borderBottomWidth: 2,
        borderColor: '#D3D3D3',
        flexWrap:'wrap'
    }
});

const footer = StyleSheet.create({
    lblBtnEdit: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    btnEdit: {
        width: '80%',
        position: 'absolute',
        bottom: 50,
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#069e67',
        borderRadius: 6,
        alignItems: "center",
        marginLeft:50,
    },
    lblBtnActivity: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    btnActivity: {
        width: '80%',
        position: 'absolute',
        bottom: 0,
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#48bfe3',
        borderRadius: 6,
        alignItems: "center",
        marginLeft:50
    }
});