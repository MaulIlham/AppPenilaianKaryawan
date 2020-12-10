import BaseUrl from './BaseUrl';
import CookieManager from '@react-native-community/cookies';
import {storeDataCookie} from "../data/TokenStorage";

export const signIn = async (data) => {
    CookieManager.get(`${BaseUrl}login`)
        .then((cookies) => {
            storeDataCookie(cookies.ci_session.value)
        });

    const response = await fetch(`${BaseUrl}login`,{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => res.json());
    return await response;
}
