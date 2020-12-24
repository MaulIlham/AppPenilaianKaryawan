import React from 'react';
import {View,Text, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo'

// screens
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import List1 from '../screens/List1';
import PenilaianAtasan from '../screens/PenilaianAtasan';
import Profile from '../screens/Profile';
import DataPenilaianPerilakuBawahan from '../screens/DataPenilaianPerilakuBawahan';
import FormPenilaian from '../screens/FormPenilaian';
import Feedback from '../screens/Feedback';
import LoadingScreenSignin from "../screens/LoadingScreenSignin";
import LoadingScreenHome from "../screens/LoadingScreenHome";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

LogBox.ignoreAllLogs();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoadingSignin">
                <Stack.Screen
                    name="MenuHome"
                    component={BottomNavigation}
                    options={{
                        title: 'Home',
                        headerStyle: {
                            backgroundColor: '#0077e6',
                        },
                        headerTintColor: '#fff',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="LoadingSignin"
                    component={LoadingScreenSignin}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="LoadingHome"
                    component={LoadingScreenHome}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const BottomNavigation = () => {
    return(
        <Tab.Navigator
            initialRouteName="HomeNavigator"
            tabBarOptions={{
                inactiveBackgroundColor: 'white',
                activeBackgroundColor: '#449ef2',
                activeTintColor: '#000000',
                inactiveTintColor: '#000000',
                keyboardHidesTabBar: true,
                tabStyle: {
                    marginVertical: 5,
                    marginHorizontal: 15,
                    borderRadius: 50,
                }
            }}>
            <Tab.Screen
                name="HomeNavigator"
                component={HomeNavigator}
                options={{
                    tabBarLabel: '',
                    tabBarColor: 'white',
                    tabBarIcon: ({ color }) =>(
                        <View style={{marginTop: 10}}>
                            <IconAntDesign name="home" color={color} size={25}/>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="ListNavigator"
                component={ListNavigator}
                options={{
                    tabBarLabel: '',
                    tabBarColor: 'white',
                    tabBarIcon: ({ color }) =>(
                        <View style={{marginTop: 10}}>
                            <IconMaterialComunity name="clipboard-text-outline" color={color} size={30}/>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="PenilaianNavigator"
                component={PenilaianNavigator}
                options={({ route }) => ({
                    tabBarLabel: '',
                    tabBarColor: 'white',
                    tabBarIcon: ({ color }) =>(
                        <View style={{marginTop: 10}}>
                            <IconMaterialComunity name="clipboard-text-outline" color={color} size={30}/>
                        </View>
                    ),
                    tabBarVisible: getTabBarVisibility(route)
                })}

            />
            <Tab.Screen
                name="ProfileNavigator"
                component={ProfileNavigator}
                options={{
                    tabBarLabel: '',
                    tabBarColor: 'white',
                    tabBarIcon: ({ color }) =>(
                        <View style={{marginTop: 10}}>
                            <IconEntypo name="users" color={color} size={25}/>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const HomeNavigator = () =>{
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#0077e6',
                    },
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    );
}

const ListNavigator = () =>{
    return (
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen
                name="List"
                component={List1}
                options={{
                    title: 'List',
                    headerStyle: {
                        backgroundColor: '#0077e6',
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="FormPenilaian1"
                component={FormPenilaian}
                options={{
                    title: 'Input Penilaian',
                    headerStyle: {
                        backgroundColor: '#0077e6',
                    },
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    );
}

const PenilaianNavigator = () =>{
    return (
            <Stack.Navigator initialRouteName="PenilaianAtasan">
                <Stack.Screen
                    name="PenilaianAtasan"
                    component={PenilaianAtasan}
                    options={{
                        title: 'Penilaian Atasan',
                        headerStyle: {
                            backgroundColor: '#0077e6',
                        },
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen
                    name="DataPerilakuBawahan"
                    component={DataPenilaianPerilakuBawahan}
                    options={{
                        title: 'Data Penilaian Perilaku Bawahan',
                        headerStyle: {
                            backgroundColor: '#0077e6',
                        },
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen
                    name="FormPenilaian2"
                    component={FormPenilaian}
                    options={{
                        title: 'Input Penilaian',
                        headerStyle: {
                            backgroundColor: '#0077e6',
                        },
                        headerTintColor: '#fff',
                        headerLeft: null,
                    }}
                />
                <Stack.Screen
                    name="Feedback"
                    component={Feedback}
                    options={{
                        title: 'Umpan Balik & Pengembangan',
                        headerStyle: {
                            backgroundColor: '#0077e6',
                        },
                        headerTintColor: '#fff',
                    }}
                />
            </Stack.Navigator>
    );
}

const getTabBarVisibility = (route) => {
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : '';

    if (routeName === 'Feedback' || routeName === 'FormPenilaian2') {
        return false;
    }

    return true;
}

const ProfileNavigator = () =>{
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Profile',
                    headerStyle: {
                        backgroundColor: '#0077e6',
                    },
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    );
}


export default AppNavigation;
