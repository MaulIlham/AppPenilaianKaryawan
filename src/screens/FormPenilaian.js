import React from 'react'
import {View, Text, StyleSheet, ScrollView, Button, Dimensions} from 'react-native';
import CardFormPenilaian from '../components/CardFormPenilaian';
import {getPointEvaluationYBS} from "../services/PenilaianYBSService";

const FormPenilaian = props =>{
    const [dataPenilaian, setDataPenilaian] = React.useState([])
    const {semester, tahun} = (props.route.params)

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <View style={{marginRight: 10, backgroundColor: '#0077e6'}}>
                    <Button
                        style={{backgroundColor: '#0077e6'}}
                        onPress={() => alert(dataX)}
                        title="Submit"
                    />
                </View>
            ),
        });
    }, [props.navigation]);

    React.useEffect(() => {
        getPointEvaluationYBS(semester,tahun).then(response => {
            setDataPenilaian(response.data)
        })
    },[])

    const handleDataPenilaian = () => {
            dataPenilaian.map((item,index) =>{
                if (item.detail.length!=0){
                    return(
                        <View style={{marginTop: 10}} key={index}>
                            <Text style={{fontSize: 14, color: '#ff0303', marginLeft: 3, marginBottom: 5}} key={index}>{item.nm_kompetensi}</Text>
                            <View style={{borderTopWidth: 1, marginLeft: 3, marginRight: 2,borderColor: '#bab9b6', borderRightWidth: 1, borderLeftWidth: 1}}>
                                {
                                    item.detail.map((item,index) => {
                                        return(
                                            <View key={index}>
                                                <CardFormPenilaian
                                                    perilaku={item.nm_perilaku_kunci}
                                                    id={item.id}
                                                />
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    )
                }
            })
    }

    const height = Dimensions.get('window').height
    const widht = Dimensions.get('window').width

    return(
        <View style={{height: height, widht: widht, backgroundColor: "#FFFFFF"}}>
            <View style={{flexDirection: 'row'}}>
                <View style={[styles.vPos,{height: 70, width: 170, marginTop: 5, marginLeft: 3}]}>
                    <Text style={{fontSize: 12}}>NAMA PERILAKU KUNCI</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={[styles.vPos3,{height: 35, width: 217, marginTop: 5}]}>
                        <Text style={{fontSize: 10}}>PENILAIAN KARYAWAN</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.vPos2,{height: 35, width: 75}]}>
                            <Text style={{fontSize: 10}}>SELALU</Text>
                            <Text style={{fontSize: 10}}>MELAKUKAN</Text>
                        </View>
                        <View style={[styles.vPos2,{height: 35, width: 75}]}>
                            <Text style={{fontSize: 10}}>JARANG</Text>
                            <Text style={{fontSize: 10}}>MELAKUKAN</Text>
                        </View>
                        <View style={[styles.vPos2,{height: 35, width: 67}]}>
                            <Text style={{fontSize: 10}}>TIDAK</Text>
                            <Text style={{fontSize: 10}}>MELAKUKAN</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View>
                <ScrollView style={{height: 645}}>
                    {handleDataPenilaian()}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    vPos:{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#bab9b6',
    },
    vPos2:{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#bab9b6',
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    vPos3:{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#bab9b6',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1
    }
})

export default FormPenilaian;
