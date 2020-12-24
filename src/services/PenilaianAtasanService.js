import BaseUrl from './BaseUrl';
import Axios from 'axios';
import {getDataToken, getDataCookie, storeDataCookie} from '../data/TokenStorage';
import CookieManager from "@react-native-community/cookies";

export const getAllPenilaianAtasan = async (semester, tahun) =>{
    const token = await getDataToken().then(res => res)
    const cookies = await getDataCookie().then(res => res)

    await CookieManager.clearAll()

    const response = await fetch(`${BaseUrl}penilaian_atasan/${semester}/${tahun}`,{
        headers: {
            'Authorization': token,
        }
    })

    console.log(response.data)
    return response.data;
}
