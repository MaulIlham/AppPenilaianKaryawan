import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('token', value)
    } catch (e) {
        // saving error
        alert("Store Token Error!");
    }
}

export const getData = async () => {
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




