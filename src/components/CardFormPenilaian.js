import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {postEvaluationYBS} from "../services/PenilaianYBSService";

const CardFormPenilaian = props => {
    const [checked, setChecked] = React.useState('')
    const {perilaku, id} = props

    const handleChecked = (nilai, check) => {
        postEvaluationYBS(nilai, id).then(response => {
            console.log("post success")
        })
        setChecked(check)
    }

    return(
        <View style={{flexDirection: 'row'}}>
            <View style={styles.vPos}>
                <Text style={{fontSize: 12}}>{perilaku}</Text>
            </View>
            <View style={[styles.vRadio,{width: 75}]}>
                <RadioButton
                    value={"text1"}
                    status={
                        checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => handleChecked('100','first')}
                />
            </View>
            <View style={[styles.vRadio,{width: 75}]}>
                <RadioButton
                    value={"text2"}
                    status={ checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => handleChecked('010','second')}
                />
            </View>
            <View style={[styles.vRadio,{width: 67}]}>
                <RadioButton
                    value={"text3"}
                    status={ checked === 'third' ? 'checked' : 'unchecked'}
                    onPress={() => handleChecked('001','third')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    vPos:{
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#bab9b6',
        width: 166,
        height: 75,
        marginLeft: 3
    },
    vRadio:{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#bab9b6',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        height: 75,
    }
})

export default CardFormPenilaian
