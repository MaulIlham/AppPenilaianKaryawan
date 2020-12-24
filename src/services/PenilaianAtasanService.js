import BaseUrl from './BaseUrl';
import Axios from 'axios';
import {getDataToken, getDataCookie, storeDataCookie} from '../data/TokenStorage';

export const getAllPenilaianAtasan = async (semester, tahun) =>{
    const token = await getDataToken().then(res => res)

    const response = await Axios.get(`${BaseUrl}penilaian_atasan/${semester}/${tahun}`,{
        headers: {
            'Authorization': token,
        }
    })

    return response.data;
}
//penilaian bawahan
export const getDataPenilaian = async (id , semester, tahun) => {
    const token = await getDataToken().then(res => res)

    const response = await Axios.get(`${BaseUrl}penilaian_atasan/penilaian/${id}/${semester}/${tahun}`,{
        headers: {
            'Authorization': token,
        }
    })

    return await response.data;
}
