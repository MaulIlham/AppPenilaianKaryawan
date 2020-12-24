import BaseUrl from "./BaseUrl";
import Axios from "axios";
import {getDataCookie, getDataToken} from "../data/TokenStorage";

export const getProfile = async () => {
    const token = await getDataToken().then(res => res)
    const cookies = await getDataCookie().then(res => res)

    const response = await fetch(`${BaseUrl}penilaian_atasan/2/2020`,{
        method: 'GET',
        credentials: 'omit',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token,
            'cookie': cookies,
        },

    })

    return await response;
}
