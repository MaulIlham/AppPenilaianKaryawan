import React from 'react';
import {View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather'

import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import List1 from '../screens/List1';
import PenilaianAtasan from '../screens/PenilaianAtasan';
import Profile from '../screens/Profile';
import DataPenilaianPerilakuBawahan from '../screens/DataPenilaianPerilakuBawahan';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen
                    name="MenuHome"
                    component={PenilaianAtasan}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="DataPerilakuBawahan"
                    component={DataPenilaianPerilakuBawahan}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const BottomNavigation = () => {
    return(
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                inactiveBackgroundColor: 'white',
                activeBackgroundColor: '#9999cc',
                activeTintColor: '#330066',
                inactiveTintColor: '#9999cc',
                keyboardHidesTabBar: true,
                tabStyle: {
                    marginVertical: 5,
                    marginHorizontal: 15,
                    borderRadius: 50,
                }
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarColor: 'white',
                    tabBarIcon: ({ color }) =>(
                            <IconAntDesign name="home" color={color} size={25}/>
                    ),
                }}
            />
            <Tab.Screen
                name="List1"
                component={List1}
                options={{
                    tabBarLabel: '',
                    tabBarColor: 'white',
                    tabBarIcon: ({ color }) =>(
                            <IconMaterialComunity name="clipboart-text-outline" color={color} size={25}/>

                    ),
                }}
            />
            <Tab.Screen
                name="PenilaianAtasan"
                component={PenilaianAtasan}
                options={{
                    tabBarLabel: '',
                    tabBarColor: 'white',
                    tabBarIcon: ({ color }) =>(
                            <IconMaterialComunity name="clipboart-check-outline" color={color} size={25}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: '',
                    tabBarColor: 'white',
                    tabBarIcon: ({ color }) =>(
                            <IconFeather name="users" color={color} size={25}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigation;
