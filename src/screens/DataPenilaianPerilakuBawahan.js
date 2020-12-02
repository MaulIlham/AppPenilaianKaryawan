import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import {getAllPenilaianAtasan} from '../services/PenilaianAtasanService';

import CardIdentitasPegawai from '../components/CardIdentitasPegawai';
import CardPeriodePenilaian from '../components/CardPeriodePenilaian';
import CardNilaiKompetensi from '../components/CardNilaiKompetensi';

const DataPenilaianPerilakuBawahan = props => {
    const [nilaiKompetensi, setNilaiKompetensi] = React.useState({});
    const {personnelId,semester,tahun}=(props.route.params)
    const height=(props.height)

    // React.useEffect(()=>{
    //     getAllPenilaianAtasan(10001022,2,2020).then(response => {
    //         console.log(response)
    //     })
    // })

    const dummyNilai=[
        {
            "name": "name1",
            "nilai1": 5,
            "nilai2": 4,
            "nilai3": 5
        },
        {
            "name": "name2",
            "nilai1": 5,
            "nilai2": 4,
            "nilai3": 5
        },
        {
            "name": "name3",
            "nilai1": 5,
            "nilai2": 4,
            "nilai3": 5
        },
        {
            "name": "name4",
            "nilai1": 5,
            "nilai2": 4,
            "nilai3": 5
        },
        {
            "name": "name5",
            "nilai1": 5,
            "nilai2": 4,
            "nilai3": 5
        },
    ]

    return(
        <View style={{height: height}}>
            <ScrollView>
                <CardIdentitasPegawai
                    personnelId={personnelId}
                    semester={semester}
                    tahun={tahun}
                />
                <CardPeriodePenilaian />
                <View style={styles.view}>
                    <Text style={{fontSize: 20}}>Nilai Kompetensi</Text>
                    <View style={{borderBottomWidth:1, borderBottomColor: '#e8e9eb', marginBottom: 10}}></View>
                    {
                        dummyNilai.map((item,index) =>{
                            return(
                                <CardNilaiKompetensi
                                    no={index+1}
                                    namaKompetensi={item.name}
                                    nKaryawan={item.nilai1}
                                    nAtasan={item.nilai2}
                                    nAkumulasi={item.nilai3}
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>
            <View>
                <FAB
                    small
                    label={"Penilaian"}
                    style={styles.btnPenilaian}
                    onPress={()=>alert("di klik")}
                />
                <FAB
                    small
                    label={"Feedback"}
                    style={styles.btnFeedback}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        width: 380,
        marginLeft: 7,
        marginRight: 10,
        marginBottom: 10
    },
    btnPenilaian:{
        position: 'absolute',
        margin: 16,
        bottom: 0,
        left: 0,
        width: 175
    },
    btnFeedback:{
        position: 'absolute',
        margin: 16,
        bottom: 0,
        right: 0,
        width: 175
    }
})

export default DataPenilaianPerilakuBawahan;
