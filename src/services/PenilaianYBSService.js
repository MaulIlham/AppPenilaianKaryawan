import BaseUrl from "./BaseUrl";
import Axios from "axios";
import {getData} from "../data/TokenStorage";

export const getAllEvaluationYBS = async (semester, tahun) => {
    const data = await getData().then(res => res)

    const response = await Axios.get(`${BaseUrl}penilaian_ybs/${semester}/${tahun}`,{
        headers: {
            'Authorization': data.token,
        }
    })

    return await response.data
}

