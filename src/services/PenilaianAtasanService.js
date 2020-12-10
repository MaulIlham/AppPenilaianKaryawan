import BaseUrl from './BaseUrl';
import Axios from 'axios';
import {getDataToken, getDataCookie, storeDataCookie} from '../data/TokenStorage';
import CookieManager from "@react-native-community/cookies";

export const getAllPenilaianAtasan = async (semester, tahun) =>{
    const token = await getDataToken().then(res => res)
    const cookies = await getDataCookie().then(res => res)
    await CookieManager.clearAll()

    const response = await Axios.get(`${BaseUrl}penilaian_atasan/${semester}/${tahun}`,{
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token,
            'cookie': cookies,
        }
    })

    console.log(cookies)
    return response.data;
}
