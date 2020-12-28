import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import IconEvil from 'react-native-vector-icons/EvilIcons'

const CardPeriodePenilaian = props => {
    const [semester, setSemester] = React.useState(0);
    const [tahun, setTahun] = React.useState(0);
    const { smt, thn} = props
    const arraySemester = [
        {
            label : "2",
            value : 2,
        },
        {
            label : "3",
            value : 3,
        }
    ]
    const arrayTahun = [
        {
            label : "2019",
            value : 2019,
        },
        {
            label : "2020",
            value : 2020,
        }
    ]

    React.useEffect(() => {
        setSemester(smt)
        setTahun(thn)
    },[])

    return(
        <View>
            <Card style={{height: 230, width: 380,marginLeft: 7, marginRight: 10, marginBottom: 10}}>
                <Card.Content>
                    <Text style={{fontSize: 20, marginBottom: 5}}>Periode Penilaian</Text>
                    <View style={{borderBottomWidth:1, borderBottomColor: '#e8e9eb'}}></View>
                    <View style={{marginTop: 15, flexDirection: 'column'}}>
                        <Text style={{fontSize: 13, marginBottom: 5, marginLeft: 2}}>Semester</Text>
                        <View style={style.vCalendar}>
                            <IconEvil name={"calendar"} size={30} style={{marginTop: 5, marginLeft: 10}}/>
                            <Picker
                                selectedValue={semester}
                                style={style.calendar}
                                onValueChange={(itemValue) =>
                                    setSemester(itemValue)
                                }>
                                {
                                    arraySemester.map(item => {
                                        return(
                                            <Picker.Item label={item.label} value={item.value} />
                                        )
                                    })
                                }
                            </Picker>
                        </View>
                        <Text style={{fontSize: 13, marginLeft: 2}}>Tahun</Text>
                        <View style={style.vCalendar}>
                            <IconEvil name={"calendar"} size={30} style={{marginTop: 5, marginLeft: 10}}/>
                            <Picker
                                selectedValue={tahun}
                                style={style.calendar}
                                onValueChange={(itemValue) =>
                                    setTahun(itemValue)
                                }>
                                {
                                    arrayTahun.map(item => {
                                        return(
                                            <Picker.Item label={item.label} value={item.value} />
                                        )
                                    })
                                }
                            </Picker>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </View>
    )
}

const style = StyleSheet.create({
    vCalendar:{
        marginBottom: 15,
        borderWidth: 1,
        height: 40,
        flexDirection: 'row',
        backgroundColor: "#f0f0f0",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    calendar:{
        height: 30,
        width: 300,
        marginTop: 3,
        marginLeft: 20
    },
})

export default CardPeriodePenilaian;
