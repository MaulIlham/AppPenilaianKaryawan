import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

const CardNilaiKompetensi = props => {
    const {namaKompetensi, nAtasan, nAkumulasi, nKaryawan, no}=props

    return(
        <View style={{height: 90}}>
            <Card>
                <Card.Content>
                    <Text style={{fontSize:18,marginBottom: 5}}>{no}. {namaKompetensi}</Text>
                    <View style={styles.viewRow}>
                        <View style={styles.viewBorder}>
                            <Text style={{fontSize: 13}}>Karyawan</Text>
                            <Text style={{fontSize: 13}}>{nKaryawan}</Text>
                        </View>
                        <View style={styles.viewBorder}>
                            <Text style={{fontSize: 13}}>Atasan</Text>
                            <Text style={{fontSize: 13}}>{nAtasan}</Text>
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={{fontSize: 13}}>Akumulasi</Text>
                            <Text style={{fontSize: 13}}>{nAkumulasi}</Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
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
       justifyContent: 'center'
   },
   viewRow:{
       flexDirection: 'row'
   }
});

export default CardNilaiKompetensi;
