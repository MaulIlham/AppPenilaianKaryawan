import React from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import styles from '../css/CardIdentitasPegawaiCss';

const CardIdentitasPegawai = props => {
    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.cardPegawai}>
                    <Text style={{fontSize: 20, marginBottom: 5}}>Identitas Pegawai</Text>
                    <View style={{borderBottomWidth:1, borderBottomColor: '#e8e9eb', marginBottom: 10}}></View>
                    <View style={styles.viewColumn}>
                        <View style={styles.viewRow}>
                            <View style={styles.viewColumn}>
                                <Text style={styles.txtTitle}>Name</Text>
                                <Text style={styles.txtData}>Fauzie</Text>
                            </View>
                            <View style={styles.viewColumn}>
                                <Text style={styles.txtTitle}>NIK</Text>
                                <Text style={styles.txtData}>100010022</Text>
                            </View>
                        </View>
                        <View style={styles.viewRow}>
                            <View style={styles.viewColumn}>
                                <Text style={styles.txtTitle}>Jabatan</Text>
                                <Text style={styles.txtData}>Manajer</Text>
                            </View>
                            <View style={styles.viewColumn}>
                                <Text style={styles.txtTitle}>Level</Text>
                                <Text style={styles.txtData}>D2</Text>
                            </View>
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={styles.txtTitle}>Atasan</Text>
                            <Text style={styles.txtData}>Erlisa</Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </View>
    )
}

export default CardIdentitasPegawai;
