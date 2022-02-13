import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainTab from './MainTab';
import SrunLogo from '../views/SrunLogo';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';

const Stack = createNativeStackNavigator();

export default function MainActivity(){
    return(
        <Stack.Navigator initialRouteName='SrunLogo' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SrunLogo' component={SrunLogo}/>
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='MainTab' component={MainTab}/>
        </Stack.Navigator>
    ) 
}