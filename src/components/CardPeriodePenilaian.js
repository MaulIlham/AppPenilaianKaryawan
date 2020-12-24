import React from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';


const CardPeriodePenilaian = props => {
    const [semester, setSemester] = React.useState('');
    const [tahun, setTahun] = React.useState('');
    const { smt, thn} = props


    return(
        <View style={{zIndex: 1}}>
            <Card style={{height: 210, width: 380,marginLeft: 7, marginRight: 10, marginBottom: 10}}>
                <Card.Content>
                    <Text style={{fontSize: 20, marginBottom: 5}}>Periode Penilaian</Text>
                    <View style={{borderBottomWidth:1, borderBottomColor: '#e8e9eb', marginBottom: 10}}></View>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={{fontSize: 10, marginBottom: 5, marginLeft: 2}}>Semester</Text>
                        <DropDownPicker
                            items={[
                                {label: '2', value: '2'},
                                {label: '3', value: '3'},
                                {label: '4', value: '4'}
                            ]}
                            devaultValue={smt}
                            containerStyle={{height: 50}}
                            style={{
                                background: '#fafafa',
                                marginBottom: 10
                            }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{background: '#fafafa'}}
                            onChangeItem={item => setSemester(item)}
                        />
                        <View>
                            <Text style={{fontSize: 10, marginBottom: 5, marginLeft: 2}}>Tahun</Text>
                            <DropDownPicker
                                items={[
                                    {label: '2019', value: '2019'},
                                    {label: '2020', value: '2020'},
                                    {label: '2020', value: '2020'},
                                    {label: '2020', value: '2020'}
                                ]}
                                devaultValue={thn}
                                containerStyle={{height: 50}}
                                style={{
                                    background: '#fafafa',
                                    marginBottom: 10,
                                }}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                dropDownStyle={{background: '#fafafa'}}
                                onChangeItem={item => setTahun(item)}
                            />
                        </View>

                    </View>
                </Card.Content>
            </Card>
        </View>
    )
}

export default CardPeriodePenilaian;
