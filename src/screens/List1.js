import React from 'react';
import {View, Text} from 'react-native';
import CardIdentitasPegawaiYBS from "../components/CardIdentitasPegawaiYBS";
import {getProfilePersonnel} from "../services/ProfileService";
import CardPeriodePenilaian from "../components/CardPeriodePenilaian";
import CardAtasan from "../components/CardAtasan";

const List1 = props => {
    const [data, setData] = React.useState({})

    React.useEffect(() => {
        getProfilePersonnel().then(response => {
            console.log(response.data)
            setData(response.data)
        })
    },[])

    return(
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <CardIdentitasPegawaiYBS
                id={data.personnel_id}
                name={data.nm_peg}
                jabatan={data.name_position}
                level={data.tingkat_jabatan}
            />
            <CardAtasan
                name={data.nm_atasan}
                jabatan={data.posisi_atasan}
            />
            <CardPeriodePenilaian
                smt={2}
                thn={2020}
            />
        </View>
    );
}

export default List1;
