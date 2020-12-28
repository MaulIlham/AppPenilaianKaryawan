import React from 'react';
import {View, Text} from 'react-native';
import CardPenilaianAtasan from '../components/CardPenilaianAtasan';
import IconFontAwesom5 from 'react-native-vector-icons/FontAwesome5'
import {getAllListPersonelEvaluation} from "../services/PenilaianAtasanService";

const PenilaianAtasan = props => {
    const [data, setData] = React.useState([])

    React.useEffect(()=>{
        getAllListPersonelEvaluation(2,2020).then(response => {
            setData(response.data)
        })
    },[])

    const handleDataPenilaian = (id,name,jabatan,semester,tahun,level) => {
        props.navigation.navigate("DataPerilakuBawahan",{
            personnelId: id,
            name: name,
            jabatan: jabatan,
            semester: semester,
            tahun: tahun,
            level:level
        });
    }

    const generateListPenilaianAtasan = () => {
        let row;
        if (data.length!=0){
            row = (
                data.map((item,index) => {
                    return(
                        <View key={index}>
                            <CardPenilaianAtasan
                                handleDataPenilaian={handleDataPenilaian}
                                id={item.personnel_id}
                                name={item.name_full}
                                posisi={item.name_position}
                                semester={item.semester}
                                tahun={item.tahun}
                                jabatan={item.tingkat_jabatan}
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
