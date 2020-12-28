import React from 'react'
import {View, Text, StyleSheet} from "react-native";
import {Card} from "react-native-paper";

const CardAtasan = props => {
    const {name, jabatan} = props


    return(
        <View style={[styles.container]}>
            <Card style={styles.card}>
                <Card.Content style={styles.cardPegawai}>
                    <Text style={{fontSize: 20, marginBottom: 5}}>Atasan</Text>
                    <View style={{borderBottomWidth:1, borderBottomColor: '#e8e9eb', marginBottom: 10}}></View>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row', marginBottom: 7}}>
                            <View style={{flex:1, flexDirection: 'column'}}>
                                <Text style={styles.txtTitle}>Name</Text>
                                <Text style={styles.txtData}>{name}</Text>
                            </View>
                            <View style={{flex:1, flexDirection: 'column'}}>
                                <Text style={styles.txtTitle}>Nik</Text>
                                <Text style={styles.txtData}></Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex:1, flexDirection: 'column'}}>
                                <Text style={styles.txtTitle}>Jabatan</Text>
                                <Text style={styles.txtData}>{jabatan}</Text>
                            </View>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 10
    },
    txtTitle:{
        fontSize: 9
    },
    txtData:{
        fontSize: 15,
    },
    cardPegawai:{
        flexDirection: 'column',
        flex: 1,
    },
    card:{
        height: 160,
        width: 380,
        marginLeft: 7,
        marginRight: 10
    },
})

export default CardAtasan;
