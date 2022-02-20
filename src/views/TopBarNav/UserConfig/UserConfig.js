import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorageLib  from '@react-native-async-storage/async-storage';

export default function UserConfig(){
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
            <View style={header.header}>
                <Text style={header.lblConfig}>CONFIGURAÇÕES</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <View style={{flex: 1, height: 50, borderBottomWidth: 1, borderColor: '#D3D3D3' }}>
                    <Text style={{ padding: 12, color: '#505050', fontSize: 16 }}>Desativar Notificações</Text>
                </View>
                <View style={{flex: 1, height: 50, paddingRight: 12, borderBottomWidth: 1, borderColor: '#D3D3D3'}}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#767577" }}
                        thumbColor={isEnabled ? "#48bfe3" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            <TouchableOpacity style={footer.btnLogout}
                onPress={handleLogout}>
                <Text style={footer.lblBtnLogout}>SAIR DA CONTA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={footer.btnDelete}
                onPress={handleLogout}>
                <Text style={footer.lblBtnDelete}>EXCLUIR CONTA</Text>
            </TouchableOpacity>
        </View>
    )
}

const css = StyleSheet.create({ container: { flex: 1, alignItems: 'center' }});

const header = StyleSheet.create({
    header: {
        width: '100%',
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#D3D3D3',
        alignItems: 'center'
    },
    lblConfig: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 16
    }
});

const footer = StyleSheet.create({
    lblBtnLogout: {
        //color: '#48bfe3',
        color: '#FFF',
        fontWeight: 'bold',
    },
    btnLogout: {
        width: '80%',
        position: 'absolute',
        bottom: 50,
        marginBottom: 20,
        padding: 10,
        //borderWidth: 1,
        //borderColor: '#48bfe3',
        backgroundColor: '#48bfe3',
        borderRadius: 6,
        alignItems: "center",
    },

    lblBtnDelete: {
        //color: 'red',
        color: '#FFF',
        fontWeight: 'bold',
    },
    btnDelete: {
        width: '80%',
        position: 'absolute',
        bottom: 0,
        marginBottom: 20,
        padding: 10,
        //borderWidth: 1,
        //borderColor: 'red',
        backgroundColor: 'red',
        borderRadius: 6,
        alignItems: "center",
    }
})