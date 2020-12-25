import React from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import styles from '../css/CardIdentitasPegawaiCss';

const CardIdentitasPegawai = props => {
    const {id, name, jabatan, semester, tahun, atasan, level} = props

    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.cardPegawai}>
                    <Text style={{fontSize: 20, marginBottom: 5}}>Identitas Pegawai</Text>
                    <View style={{borderBottomWidth:1, borderBottomColor: '#e8e9eb', marginBottom: 10}}></View>
                    <View style={styles.viewColumn}>
                        <View style={[styles.viewRow,{marginBottom: 7}]}>
                            <View style={styles.viewColumn}>
                                <Text style={styles.txtTitle}>Name</Text>
                                <Text style={[styles.txtData,{width: 190}]}>{name}</Text>
                            </View>
                            <View style={[styles.viewColumn,{marginLeft: 50}]}>
                                <Text style={styles.txtTitle}>NIK</Text>
                                <Text style={styles.txtData}>{id}</Text>
                            </View>
                        </View>
                        <View style={[styles.viewRow,{marginBottom: 7}]}>
                            <View style={styles.viewColumn}>
                                <Text style={styles.txtTitle}>Jabatan</Text>
                                <Text style={[styles.txtData,{width: 190}]}>{jabatan}</Text>
                            </View>
                            <View style={[styles.viewColumn,{marginLeft: 50}]}>
                                <Text style={styles.txtTitle}>Level</Text>
                                <Text style={styles.txtData}>{level}</Text>
                            </View>
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={styles.txtTitle}>Atasan</Text>
                            <Text style={styles.txtData}>{atasan}</Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </View>
    )
}

export default CardIdentitasPegawai;
