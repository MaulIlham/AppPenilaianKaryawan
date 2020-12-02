import BaseUrl from './BaseUrl';
import Axios from 'axios';
import {getData} from '../data/TokenStorage';

export const getAllPenilaianAtasan = async (personnelId, semester, tahun) =>{
    const token = await getData().then(res => res)
    const response = await Axios.get(`${BaseUrl}profile/personel`,{
        headers: {
            Authorization: token
        }
    })
    return response.data;
}
