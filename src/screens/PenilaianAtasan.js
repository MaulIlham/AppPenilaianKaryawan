import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-paper';
import styles from '../css/CardPenilaianAtasanCss';
import {getAllPenilaianAtasan} from '../services/PenilaianAtasanService';
import CardPenilaianAtasan from '../components/CardPenilaianAtasan';
import IconFontAwesom5 from 'react-native-vector-icons/FontAwesome5'

const PenilaianAtasan = props => {

    React.useEffect(()=>{
        getAllPenilaianAtasan(2,2020).then(response=>{
            // console.log(response)
        })
    })

    const dd=[]
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

    const handleDataPenilaian = (id,name,jabatan,semester,tahun,atasan,level) => {
        props.navigation.navigate("DataPerilakuBawahan",{
            personnelId: id,
            name: name,
            jabatan: jabatan,
            atasan: atasan,
            semester: semester,
            tahun: tahun,
            level:level
        });
    }

    const generateListPenilaianAtasan = () => {
        let row;
        if (dummyPenilaian.length!=0){
            row = (
                dummyPenilaian.map((item,index) => {
                    return(
                        <View key={index}>
                            <CardPenilaianAtasan
                                handleDataPenilaian={handleDataPenilaian}
                                id={item.id}
                                name={item.nama}
                                posisi={item.posisi}
                            />
                        </View>
                    )
                })
            );
        }else {
            row = (
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, flexDirection: 'column',marginTop: 340}}>
                    <IconFontAwesom5 name="inbox" size={90} color={"#1eb8e3"}/>
                    <Text style={{fontSize: 15}}>Data Masih Kosong</Text>
                </View>
            );
        }
        return row;
    }

    return(
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {generateListPenilaianAtasan()}
        </View>
    );
}

export default PenilaianAtasan;
