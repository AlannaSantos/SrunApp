import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome5 , Octicons, FontAwesome } from '@expo/vector-icons'
//import { StatusBar } from 'react-native';

import UserProfile from '../views/TopBarNav/UserProfile/UserProfile';
import NewActivity from '../views/TopBarNav/NewActivity/NewActivity';
import UserStatistics from '../views/TopBarNav/UserStatistics/UserStatistics';
import UserConfig from '../views/TopBarNav/UserConfig/UserConfig';

const TopTabNav = createMaterialTopTabNavigator();
export default function MainTab(){
    return (
        <TopTabNav.Navigator 
            screenOptions = {{
                tabBarStyle: { backgroundColor: '#48bfe3', marginTop: 25 }, /*paddingTop: StatusBar.currentHeight*/
                tabBarIndicatorStyle: { backgroundColor: '#FFF' },
            }}>
            <TopTabNav.Screen 
                name='UserProfile' 
                component={UserProfile}
                options={{ title: (props) => <FontAwesome name='user-circle-o' size={24} color="#FFF" />}}
            />
            <TopTabNav.Screen
                name='NewActivity' 
                component={NewActivity}
                options={{ title: (props) => <FontAwesome5 name='walking' size={25} color="#FFF" />}}
            />
            <TopTabNav.Screen 
                name='UserStatistics' 
                component={UserStatistics}
                options={{ title: (props) => <Octicons  name='graph' size={25} color="#FFF" />}}
            />
            <TopTabNav.Screen 
                name='UserConfig' 
                component={UserConfig}
                options={{ title: (props) => <FontAwesome name='gears' size={24} color="#FFF" />}}
            />
        </TopTabNav.Navigator>
    )
}