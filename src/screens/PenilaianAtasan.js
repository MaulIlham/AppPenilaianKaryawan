import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-paper';
import styles from '../css/CardPenilaianAtasanCss';
import {getAllPenilaianAtasan} from '../services/PenilaianAtasanService';
import CardPenilaianAtasan from '../components/CardPenilaianAtasan';

const PenilaianAtasan = props => {

    const dummyPenilaian = [
        {
            "id":"10001022",
            "nama": "Fauzi",
            "posisi": "manager"
        },
        {
            "id":"10001023",
            "nama": "Aldi",
            "posisi": "Accounting"
        },
        {
            "id":"10001024",
            "nama": "Doni",
            "posisi": "Sales"
        },
    ]

    const handleDataPenilaian = () => {
        props.navigation.navigate("DataPerilakuBawahan",{
            personnelId:10001022,
            semester: 2,
            tahun: 2020
        });
    }

    return(
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {
                dummyPenilaian.map((item,index) => {
                    return(
                        <CardPenilaianAtasan
                            handleDataPenilaian={handleDataPenilaian}
                            id={item.id}
                            name={item.nama}
                            posisi={item.posisi}
                        />
                    )
                })
            }

        </View>
    );
}

export default PenilaianAtasan;
