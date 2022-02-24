import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainTab from './MainTab';
import SrunLogo from '../views/SrunLogo';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import RegisterUser from "../views/RegisterUser/RegisterUser";
import ListActivitySchedule from "../views/ListActivitySchedule/ListActivitySchedule";

const Stack = createNativeStackNavigator();

export default function MainActivity(){
    return(
            <Stack.Navigator initialRouteName='MainTab' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='SrunLogo' component={SrunLogo}/>
                <Stack.Screen name='SignIn' component={SignIn}/>
                <Stack.Screen name='SignUp' component={SignUp}/>
                <Stack.Screen name='MainTab' component={MainTab}/>
                <Stack.Screen name='RegisterUser' component={RegisterUser}
                    options={{
                        headerShown:true,
                        title:'Edição',
                        headerTintColor:'#ffffff',
                        headerStyle: {
                            backgroundColor: '#48bfe3',
                        },
                        headerTitleAlign:'center',
                    }}/>
                <Stack.Screen name='ListActivitySchedule' component={ListActivitySchedule}
                              options={{
                                  headerShown:true,
                                  title:'Lista Atividades Agendadas',
                                  headerTintColor:'#ffffff',
                                  headerStyle: {
                                      backgroundColor: '#48bfe3',
                                  },
                                  headerTitleAlign:'center',
                              }}/>
            </Stack.Navigator>
    )
}