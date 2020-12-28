import BaseUrl from "./BaseUrl";
import Axios from "axios";
import {getData} from "../data/TokenStorage";


export const getProfilePersonnel = async () => {
    const data = await getData().then(res => res)

    const response = await Axios.get(`${BaseUrl}profile/personel`,{
        headers: {
            'Authorization': data.token,
        }
    })

    return await response.data
}

export const getProfile = async () => {
    const data = await getData().then(res => res)

    const response = await Axios.get(`${BaseUrl}profile`,{
        headers: {
            'Authorization': data.token
        }
    })

    return await response.data
}

export const updateProfile = async (value) => {
    const data = await getData().then(res => res)

    const response = await Axios.post(`${BaseUrl}profile/update_password`,{
        headers: {
            'Authorization': data.token
        },
        value
    })

    return await response.data
}
