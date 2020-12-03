import BaseUrl from './BaseUrl';
import Axios from 'axios';
import {getData} from '../data/TokenStorage';

export const getAllPenilaianAtasan = async (semester, tahun) =>{
    const token = await getData().then(res => res)
    const response = await Axios.get("http://156.67.218.233/perilakunew/api/penilaian_atasan/penilaian/10001022/2/2020",{
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token,
        }
    })
    console.log(response.data)
    return response.data;
}
