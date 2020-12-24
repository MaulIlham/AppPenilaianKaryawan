import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

const CardNilaiKompetensi = props => {
    const {namaKompetensi, nAtasan, nAkumulasi, nKaryawan, no}=props

    const handleNilai = (nilai) => {
        if (nilai==null){
            return '-'
        }else {
            return nilai
        }
    }

    return(
        <View style={{height: 100}}>
                    <View style={{height: 50}}>
                        <Text style={{fontSize:15,marginBottom: 5}}>{no}. {namaKompetensi}</Text>
                    </View>
                    <View style={styles.viewRow}>
                        <View style={styles.viewBorder}>
                            <Text style={{fontSize: 13}}>Karyawan</Text>
                            <Text style={{fontSize: 13}}>{handleNilai(nKaryawan)}</Text>
                        </View>
                        <View style={styles.viewBorder}>
                            <Text style={{fontSize: 13}}>Atasan</Text>
                            <Text style={{fontSize: 13}}>{handleNilai(nAtasan)}</Text>
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={{fontSize: 13}}>Akumulasi</Text>
                            <Text style={{fontSize: 13}}>{handleNilai(nAkumulasi)}</Text>
                        </View>
                    </View>

        </View>
    )
}

const styles = StyleSheet.create({
   viewBorder:{
       borderRightWidth: 1,
       borderRightColor: '#e8e9eb',
       flex: 1,
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center'
   } ,
   viewColumn:{
       flex: 1,
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center',
       height: 50
   },
   viewRow:{
       flexDirection: 'row',
       height: 50
   }
});

export default CardNilaiKompetensi;
