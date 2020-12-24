import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import {getAllPenilaianAtasan, getDataPenilaian} from '../services/PenilaianAtasanService';
import IconFontAwesom5 from 'react-native-vector-icons/FontAwesome5'

import UseHandleScroll from "./UseHandleScroll";
import CardIdentitasPegawai from '../components/CardIdentitasPegawai';
import CardPeriodePenilaian from '../components/CardPeriodePenilaian';
import CardNilaiKompetensi from '../components/CardNilaiKompetensi';

const DataPenilaianPerilakuBawahan = props => {
    const {personnelId,semester,tahun, name, jabatan, atasan, level}=(props.route.params)
    const [data, setData] = React.useState([])
    const height=(props.height)
    const { handleScroll, showButton } = UseHandleScroll();

    React.useEffect(() => {
        getDataPenilaian("10001022",2,2020).then(response => {
            setData(response.data)
        })
    },[])



    const dd=[];
console.log(data)
    const generateNilaiKompetensi = () => {
        let row;
        if (data.length!=0){
            row= (
                data.map((item,index) =>{
                    return(
                        <View key={index}>
                            <Card>
                                <Card.Content>
                                    <CardNilaiKompetensi
                                        no={index+1}
                                        namaKompetensi={item.nm_kompetensi}
                                        nKaryawan={item.nilai_ybs}
                                        nAtasan={item.nilai_atasan}
                                        nAkumulasi={item.nilai_akumulasi}
                                    />
                                </Card.Content>
                            </Card>
                        </View>
                    )
                })
            );
        }else {
            row = (
                <View style={{alignItems: 'center',height: 200, flex: 1, flexDirection: 'column',marginTop: 50}}>
                    <IconFontAwesom5 name="inbox" size={70} color={"#1eb8e3"}/>
                    <Text style={{fontSize: 15}}>Data Masih Kosong</Text>
                </View>
            );
        }
        return row;
    }

    return(
        <View style={{height: height}}>
            <ScrollView onScroll={handleScroll}>
                <CardIdentitasPegawai
                    id={personnelId}
                    semester={semester}
                    tahun={tahun}
                    name={name}
                    jabatan={jabatan}
                    atasan={atasan}
                    level={level}
                />
                <View>
                    <CardPeriodePenilaian
                        smt={semester}
                        thn={tahun}
                    />
                </View>
                <View style={styles.view}>
                    <Card>
                        <Card.Content>
                            <Text style={{fontSize: 20}}>Nilai Kompetensi</Text>
                            <View style={{borderBottomWidth:1, borderBottomColor: '#e8e9eb', marginBottom: 10}}></View>
                            {
                                generateNilaiKompetensi()
                            }
                        </Card.Content>
                    </Card>
                </View>
            </ScrollView>
            <View>
                {showButton&&<FAB
                    small
                    label={"Penilaian"}
                    style={styles.btnPenilaian}
                    onPress={() => props.navigation.navigate("FormPenilaian2")}
                />}
                {showButton&&<FAB
                    small
                    label={"Feedback"}
                    style={styles.btnFeedback}
                    onPress={() => props.navigation.navigate("Feedback")}
                />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        width: 380,
        marginLeft: 7,
        marginRight: 10,
        marginBottom: 10,
        zIndex: 0
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
        width: 175,
        backgroundColor: '#2fc91e'
    }
})

export default DataPenilaianPerilakuBawahan;
