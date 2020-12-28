import React from 'react'
import {View, Text, TouchableOpacity, TextInput, Dimensions, StyleSheet} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import IconEvil from 'react-native-vector-icons/EvilIcons'

const Feedback = props => {
    const [semester, setSemester] = React.useState(0);
    const [tahun, setTahun] = React.useState(0);
    const [pengembangan, setPengembangan] = React.useState('');
    const [umpanBalik, setUmpanBalik] = React.useState('');

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

    const height = Dimensions.get('window').height
    const widht = Dimensions.get('window').width

    return(
        <View style={{backgroundColor: "#FFFFFF", height: height, widht: widht}}>
            <View style={{flex: 1, flexDirection: 'column', marginRight: 5, marginLeft: 5, marginTop: 20}}>
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
                <Text style={{fontSize: 13, marginBottom: 5, marginLeft: 2}}>Tahun</Text>
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
                <TextInput
                    placeholder="Umpan Balik"
                    onChangeText={text => setUmpanBalik(text)}
                    style={style.txtInput}
                />
                <TextInput
                    placeholder="Pengembangan"
                    onChangeText={text => setPengembangan(text)}
                    style={style.txtInput}
                />
                <TouchableOpacity
                    style={style.button}
                    onPress={()=>alert("a")}
                >
                    <Text style={{fontSize:20, color: '#fafafa'}}>Submit</Text>
                </TouchableOpacity>
            </View>
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
    txtInput:{
        height: 40,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderColor: '#bab9b6',
        marginTop: 5,
        marginBottom: 15,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0077e6',
        height: 50,
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    }
})

export default Feedback;
