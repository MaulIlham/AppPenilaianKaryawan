import React from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';


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
            <Card style={{height: 210, width: 380,marginLeft: 7, marginRight: 10, marginBottom: 10}}>
                <Card.Content>
                    <Text style={{fontSize: 20, marginBottom: 5}}>Periode Penilaian</Text>
                    <View style={{borderBottomWidth:1, borderBottomColor: '#e8e9eb', marginBottom: 10}}></View>
                    <View style={{marginTop: 15, flexDirection: 'column'}}>
                        <Text style={{fontSize: 10, marginBottom: 5, marginLeft: 2}}>Semester</Text>
                        <Picker
                            selectedValue={semester}
                            style={{height: 30, width: 200, marginBottom: 10}}
                            onValueChange={(itemValue, itemIndex) =>
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
                            <Text style={{fontSize: 10, marginLeft: 2}}>Tahun</Text>
                            <Picker
                                selectedValue={tahun}
                                style={{height: 30, width: 200}}
                                onValueChange={(itemValue, itemIndex) =>
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
                </Card.Content>
            </Card>
        </View>
    )
}

export default CardPeriodePenilaian;
