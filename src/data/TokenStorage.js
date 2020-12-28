import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('dataUser', jsonValue)
    } catch (e) {
        alert("Store Data Error!")
    }
}

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('dataUser')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        alert("Get Data Error!")
    }
}


