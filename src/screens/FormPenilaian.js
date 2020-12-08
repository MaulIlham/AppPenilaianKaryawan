import React from 'react'
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import CardFormPenilaian from '../components/CardFormPenilaian';

const FormPenilaian = props =>{
    const dataPenilaian = [
        {
            label: '1. Berorientasi pada Hasil (Driving for Result)',
            value: [
                {
                    title : 'Menargetkan Peluang'
                },
                {
                    title : 'Menetapkan sasaran yang menantang'
                },
                {
                    title : 'Mencapai sasaran'
                },
                {
                    title : 'Tetap Fokus'
                },
            ]
        },
        {
            label: '2. Pengembangan Hubungan Strategis (Developing Strategic Relationship)',
            value: [
                {
                    title : 'Memperjelas informasi'
                },
                {
                    title : 'Menetapkan tujuan bersama'
                },
                {
                    title : 'Merumuskan strategi untuk meyakinkan pihak lain'
                },
                {
                    title : 'Secara kolaboratif mengembangkan solusi'
                },
                {
                    title : 'Mempengaruhi tindakan'
                },
                {
                    title : 'Membangun komitmen'
                },
                {
                    title : 'Menumbuhkan jejaring yang aktif'
                },
                {
                    title : 'Menghargai Kontribusi'
                },
            ]
        },
        {
            label: '3. Ketajaman Analisa Bisnis (Business Acumen',
            value: [
                {
                    title : 'Analisa'
                },
                {
                    title : 'Integrasi'
                },
                {
                    title : 'Memahami aplikasi dari strategi dan sistem keuangan'
                },
            ]
        },
        {
            label: '4. Orientasi kepada Pelanggan (Customer Orientation)',
            value: [
                {
                    title : 'Berusaha untuk memahami pelanggan'
                },
                {
                    title : 'Mendidik pelanggan'
                },
                {
                    title : 'Menjaga kepercayaan pelanggan'
                },
                {
                    title : 'Mengambil tindakan untuk memenuhi kebutuhan dan mengatasi keluhan pelanggan.'
                },
                {
                    title : 'Membangun hubungan kemitraan'
                },
                {
                    title : 'Mengenali isu layanan pelanggan'
                },
                {
                    title : 'Membuat solusi yang saling menguntungkan'
                },
            ]
        },
        {
            label: '5. Kemampuan Memberikan Arahan Strategis (Establishing Strategic Direction)',
            value: [
                {
                    title : 'Mengumpulkan informasi'
                },
                {
                    title : 'Mengolah informasi'
                },
                {
                    title : 'Melakukan analisa data'
                },
                {
                    title : 'Mengevaluasi/Memilih strategi'
                },
                {
                    title : 'Menyusun batas waktu'
                },
                {
                    title : 'Menjalankan rencana'
                },
            ]
        },
        {
            label: '6. Pengembangan dan Pemahaman Lingkungan Bisnis secara Global (Global Acumen)',
            value: [
                {
                    title : 'Mengembangkan pemahaman'
                },
                {
                    title : 'Menjaga kesadaran global'
                },
                {
                    title : 'Mengenali dampak'
                },
            ]
        },
        {
            label: '7. Pengembalan Keputusan Operasional (Operational Decision Making)',
            value: [
                {
                    title : 'Mencari informasi'
                },
                {
                    title : 'Melakukan persiapan'
                },
                {
                    title : 'Mengelola dan menggunakan analisa data'
                },
                {
                    title : 'Mengembangkan dan memoertimbangkan alternatif'
                },
                {
                    title : 'mendapatkan Komitmen'
                },
                {
                    title : 'Memperlihatkan kemampuan pengambilan keputusan/tindakan'
                },
            ]
        },
        {
            label: '8. Penyelarasan Kinerja (Aligning Performance for Success)',
            value: [
                {
                    title : 'Menetapkan sasaran kinerja'
                },
                {
                    title : 'Menentukan pendekatan'
                },
                {
                    title : 'Menentukan pendekatan'
                },
                {
                    title : 'Menciptakan lingkungan belajar'
                },
                {
                    title : 'Secara kolaboratif menyusun rencana pengembangan'
                },
                {
                    title : 'Memantau Kinerja'
                },
                {
                    title : 'Mengevaluasi Kinerja'
                },
            ]
        },
        {
            label: '9. Membangun Talenta Organisasi (Building Organization Talent)',
            value: [
                {
                    title : 'Mendiagnosa kapabilitas dan kebutuhan pengembangan'
                },
                {
                    title : 'Mengamati lingkungan untuk penugasan dalam rangka pengembangan'
                },
                {
                    title : 'Menjadi pendukung utama program talent Management'
                },
                {
                    title : 'Menciptakan budaya belajar'
                },
                {
                    title : 'Memastikan tersedianya sistem dan proses penghargaan yang berbeda'
                },
                {
                    title : 'Mempertahankan retensi'
                },
            ]
        },
        {
            label: '10. Kepemimpinan Perubahan (Change Leadership)',
            value: [
                {
                    title : 'Melihat peluang'
                },
                {
                    title : 'Menghargai pendekatan lain'
                },
                {
                    title : 'Mendorong terjadinya pendobrakan batasan'
                },
                {
                    title : 'Menghadapi penolakan atas perubahan'
                },
                {
                    title : 'Mengelola kompleksitas, kontradiksi dan paradoks'
                },
                {
                    title : 'Mendorong perbaikan'
                },
            ]
        },
        {
            label: '11. Pemberdayaan/Pendelegasian (Empowerment/Delegation)',
            value: [
                {
                    title : 'Memilih Target'
                },
                {
                    title : 'Menetapkan ruang gerak'
                },
                {
                    title : 'Mendorong akuntabilitas'
                },
                {
                    title : 'Menyediakan bimbingan'
                },
                {
                    title : 'Menindaklanjuti'
                },
            ]
        },
        {
            label: '12. Kepemimpinan Visioner (Visionary Leadership)',
            value: [
                {
                    title : 'Menciptakan visi'
                },
                {
                    title : 'Mempengaruhi pergerakan'
                },
                {
                    title : 'Mendorong untuk bertindak'
                },
                {
                    title : 'Memimpin melalui contoh, model keyakinan dan nilai organisasi'
                },
            ]
        }
    ]

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <View style={{marginRight: 10, backgroundColor: '#0077e6'}}>
                    <Button
                        style={{backgroundColor: '#0077e6'}}
                        onPress={() => alert('submit')}
                        title="Submit"
                    />
                </View>
            ),
        });
    }, [props.navigation]);

    return(
        <View>
            <View style={{flexDirection: 'row'}}>
                <View style={[styles.vPos,{height: 70, width: 170, marginTop: 5, marginLeft: 3}]}>
                    <Text style={{fontSize: 12}}>NAMA PERILAKU KUNCI</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={[styles.vPos3,{height: 35, width: 217, marginTop: 5}]}>
                        <Text style={{fontSize: 10}}>PENILAIAN KARYAWAN</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.vPos2,{height: 35, width: 75}]}>
                            <Text style={{fontSize: 10}}>SELALU</Text>
                            <Text style={{fontSize: 10}}>MELAKUKAN</Text>
                        </View>
                        <View style={[styles.vPos2,{height: 35, width: 75}]}>
                            <Text style={{fontSize: 10}}>JARANG</Text>
                            <Text style={{fontSize: 10}}>MELAKUKAN</Text>
                        </View>
                        <View style={[styles.vPos2,{height: 35, width: 67}]}>
                            <Text style={{fontSize: 10}}>TIDAK</Text>
                            <Text style={{fontSize: 10}}>MELAKUKAN</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View>
                <ScrollView style={{height: 645}}>
                    {
                        dataPenilaian.map((item,index) =>{
                            return(
                                <View style={{marginTop: 10}} key={index}>
                                    <Text style={{fontSize: 14, color: '#ff0303', marginLeft: 3, marginBottom: 5}} key={index}>{item.label}</Text>
                                    <View style={{borderTopWidth: 1, marginLeft: 3, marginRight: 2,borderColor: '#bab9b6', borderRightWidth: 1, borderLeftWidth: 1}}>
                                    {
                                        item.value.map((item,index) => {
                                            return(
                                                <View key={index}>
                                                    <CardFormPenilaian
                                                        value={item.title}
                                                    />
                                                </View>
                                            )
                                        })
                                    }
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    vPos:{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#bab9b6',
    },
    vPos2:{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#bab9b6',
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    vPos3:{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#bab9b6',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1
    }
})

export default FormPenilaian;
