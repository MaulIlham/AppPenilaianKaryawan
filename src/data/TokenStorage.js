import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataToken = async (value) => {
    try {
        await AsyncStorage.setItem('token', value)
    } catch (e) {
        // saving error
        alert("Store Token Error!");
    }
}

export const storeDataCookie = async (value) => {
    try {
        await AsyncStorage.setItem('cookie', value)
    } catch (e) {
        // saving error
        alert("Store Cookie Error!");
    }
}

export const getDataToken = async () => {
    try {
        const value = await AsyncStorage.getItem('token')
        if(value !== null) {
            // value previously stored
            return await value
        }
    } catch(e) {
        // error reading value
        alert("Get Token Error!")
    }
}

export const getDataCookie = async () => {
    try {
        const value = await AsyncStorage.getItem('cookie')
        if(value !== null) {
            // value previously stored
            return await value
        }
    } catch(e) {
        // error reading value
        alert("Get Cookie Error!")
    }
}




