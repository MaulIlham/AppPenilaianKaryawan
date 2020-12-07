import React from 'react'
import {View, Text, TouchableOpacity,TextInput} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

const Feedback = props => {
    const [semester, setSemester] = React.useState('');
    const [tahun, setTahun] = React.useState('');
    const [pengembangan, setPengembangan] = React.useState('');
    const [umpanBalik, setUmpanBalik] = React.useState('');

    return(
        <View>
            <View style={{flex: 1, flexDirection: 'column', marginRight: 5, marginLeft: 5, marginTop: 20}}>
                <Text style={{fontSize: 10, marginBottom: 5, marginLeft: 2}}>Semester</Text>
                <DropDownPicker
                    items={[
                        {label: '2', value: '2'},
                        {label: '3', value: '3'},
                        {label: '4', value: '4'}
                    ]}
                    devaultValue={semester}
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
                <Text style={{fontSize: 10, marginBottom: 5, marginLeft: 2}}>Tahun</Text>
                <DropDownPicker
                    items={[
                        {label: '2019', value: '2019'},
                        {label: '2020', value: '2020'},
                        {label: '2020', value: '2020'},
                        {label: '2020', value: '2020'}
                    ]}
                    devaultValue={tahun}
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
                <TextInput
                    placeholder="Umpan Balik"
                    onChangeText={text => setUmpanBalik(text)}
                    style={{height: 50, backgroundColor: '#fafafa', borderWidth: 1, borderColor: '#bab9b6', marginTop: 5}}
                />
                <TextInput
                    placeholder="Pengembangan"
                    onChangeText={text => setPengembangan(text)}
                    style={{height: 50, backgroundColor: '#fafafa', borderWidth: 1, borderColor: '#bab9b6', marginTop: 15}}
                />
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#0077e6',
                        height: 50,
                        padding: 10,
                        marginTop: 20,
                        borderRadius: 5
                    }}
                    onPress={()=>alert("a")}
                >
                    <Text style={{fontSize:20, color: '#fafafa'}}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Feedback;
