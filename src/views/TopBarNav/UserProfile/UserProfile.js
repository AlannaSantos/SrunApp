import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
//import base64 from 'base-64'
import AsyncStorageLib from '@react-native-async-storage/async-storage';

import Vieww from '../../../components/Vieww';

export default function UserProfile(){
    
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

        //console.log(result);

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
    
    //let usuario = JSON.parse(storageUser);
    /*let imageUri = image ? `data:image/jpg;base64,${image.base64}` : null;
    image && console.log("Tamanho com bits extra" + imageUri.length);

    if(imageUri != null){
        //let strencoded = base64.encode(image.base64);
        //console.log("Tamanho encode: " + strencoded.length);
        let strdecoded = base64.decode(image.base64);
        console.log("Tamanho decode: " + strdecoded.length);
    }*/

    //let strencoded = base64
    //
    //imageUri && console.log(strdecoded.length);

    return (
        
        <View style={css.container}>
            <View style={header.view}>
                <Text style={header.text}>PERFIL</Text>
            </View>
            <Vieww lbl="Nome" lblValue={userData && userData.firstname + " " + userData.lastname}/>
            <Vieww lbl="Email" lblValue={userData && userData.email }/>
            {/* <View style={css.view}>
                <TouchableOpacity style={css.btnImage} onPress={pickImage}>
                    {image && <Image source={{ uri: `data:image/jpg;base64,${image.base64}` }} style={{ width: 80, height: 80, borderRadius: 50 }} /> }
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center'
    },
    view:{
        flex: 1,
    },
    //imgContainer: {
        //padding: 2,
        //flex: 1,
        //flexDirection: 'row'
        //alignItems: 'flex-start'
        //left: 0
        //flexDirection: 'row',
        //alignItems: 'center'
        //flex
    //},
    btnImage: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#FFF',
        //padding: 10,
        //backgroundColor: '#48bfe3',
        width: 80, height: 80, borderRadius: 50 
    }
});

const header = StyleSheet.create({
    view: {
        width: '100%',
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderColor: '#D3D3D3',
        alignItems: 'center'
    },
    text: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 16
    }
});