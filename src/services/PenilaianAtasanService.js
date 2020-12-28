import BaseUrl from './BaseUrl';
import Axios from 'axios';
import {getData} from '../data/TokenStorage';

export const getAllListPersonelEvaluation = async (semester, tahun) =>{
    const data = await getData().then(res => res)

    const response = await Axios.get(`${BaseUrl}penilaian_atasan/${semester}/${tahun}`,{
        headers: {
            'Authorization': data.token,
        }
    })

    return response.data;
}
//penilaian bawahan
export const getDataEvaluationEmployees = async (id , semester, tahun) => {
    const data = await getData().then(res => res)

    const response = await Axios.get(`${BaseUrl}penilaian_atasan/penilaian/${id}/${semester}/${tahun}`,{
        headers: {
            'Authorization': data.token,
        }
    })

    return await response.data;
}
