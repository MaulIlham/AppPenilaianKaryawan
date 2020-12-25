import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-paper';
import styles from '../css/CardPenilaianAtasanCss';

const CardPenilaianAtasan = props => {
    const {id, name, posisi, semester, tahun, jabatan}=props

    return(
        <View style={{marginTop: 10}}>
            <TouchableOpacity
                style={styles.btnCard}
                onPress={()=>props.handleDataPenilaian(id,name,posisi,semester,tahun,jabatan)}
            >
                <Card>
                    <Card.Content>
                        <View style={styles.viewCard}>
                            <Image style={styles.image} source={{uri: 'https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'}}/>
                            <View style={[styles.viewCardTextColumn,{marginLeft: 20}]}>
                                <View style={styles.viewCardTextRow}>
                                    <View style={styles.viewCardTextColumn}>
                                        <Text style={styles.txtTitle}>Nama Pegawai</Text>
                                        <Text style={[styles.txtData,{width: 150, height: 30}]}>{name}</Text>
                                    </View>
                                    <View style={[styles.viewCardTextColumn,{marginLeft: 60}]}>
                                        <Text style={styles.txtTitle}>Id Pegawai</Text>
                                        <Text style={styles.txtData}>{id}</Text>
                                    </View>
                                </View>
                                <Text style={styles.txtTitle}>Posisi Jabatan</Text>
                                <Text style={styles.txtData}>{posisi}</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        </View>
    )
}

export default CardPenilaianAtasan;
