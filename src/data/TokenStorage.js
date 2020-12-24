import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataToken = async (value) => {
    try {
        await AsyncStorage.setItem('token', value)
    } catch (e) {
        alert("Store Token Error!");
    }
}

export const getDataToken = async () => {
    try {
        const value = await AsyncStorage.getItem('token')
        if(value !== null) {
            return await value
        }
    } catch(e) {
        alert("Get Token Error!")
    }
}



