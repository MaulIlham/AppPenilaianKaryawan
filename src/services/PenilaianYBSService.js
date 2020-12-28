import BaseUrl from "./BaseUrl";
import Axios from "axios";
import {getData} from "../data/TokenStorage";
import {get} from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const getAllEvaluationYBS = async (semester, tahun) => {
    const data = await getData().then(res => res)

    const response = await Axios.get(`${BaseUrl}penilaian_ybs/${semester}/${tahun}`,{
        headers: {
            'Authorization': data.token,
        }
    })

    return await response.data
}

export const getPointEvaluationYBS = async (semester, tahun) => {
    const data = await getData().then(res => res)

    const response = await Axios.get(`${BaseUrl}penilaian_ybs/create/${semester}/${tahun}`,{
        headers: {
            'Authorization': data.token,
        }
    })

    return await response.data
}

export const postEvaluationYBS = async (nilai, id) => {
    const data = await getData().then(res => res)

    const response = await Axios.post(`${BaseUrl}penilaian_ybs/update_penilaian/${nilai}/${id}`,{
        headers: {
            'Authorization': data.token,
        }
    })

    return await response.data
}
