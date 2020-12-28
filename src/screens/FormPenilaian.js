import React from 'react'
import {View, Text, StyleSheet, ScrollView, Button, Dimensions} from 'react-native';
import CardFormPenilaian from '../components/CardFormPenilaian';
import dataPenilaian from "../data/Data";

const FormPenilaian = props =>{
    const [ dataX, setDataX ] = React.useState(0)
    const [ dataY, setDataY ] = React.useState(0)
    const [ dataZ, setDataZ ] = React.useState(0)

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
    },[dataX,dataY,dataZ])

    const handlePlusX = () => {
        setDataX(dataX+1)
    }

    const handlePlusY = () => {
        setDataY(dataY+1)
    }

    const handlePlusZ = () => {
        setDataZ(dataZ+1)
    }

    const handleMin = (status,flag) => {
        if (flag){
            if (status==='first'){
                setDataX(dataX-1)
                console.log("x - 1")
            }else if (status==='second'){
                setDataY(dataY-1)
                console.log("y - 1")
            }else if (status==='third'){
                setDataZ(dataZ-1)
                console.log("z - 1")
            }
        }
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
                    {
                        dataPenilaian.map((item,index) =>{
                            return(
                                <View style={{marginTop: 10}} key={index}>
                                    <Text style={{fontSize: 14, color: '#ff0303', marginLeft: 3, marginBottom: 5}} key={index}>{item.label}</Text>
                                    <View style={{borderTopWidth: 1, marginLeft: 3, marginRight: 2,borderColor: '#bab9b6', borderRightWidth: 1, borderLeftWidth: 1}}>
                                    {
                                        item.value.map((item,index) => {
                                            return(
                                                <View key={index}>
                                                    <CardFormPenilaian
                                                        value={item.title}
                                                        plusx={handlePlusX}
                                                        plusy={handlePlusY}
                                                        plusz={handlePlusZ}
                                                        handleMin={handleMin}
                                                    />
                                                </View>
                                            )
                                        })
                                    }
                                    </View>
                                </View>
                            )
                        })
                    }
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
