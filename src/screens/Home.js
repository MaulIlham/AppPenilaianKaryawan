import React from 'react';
import {View, Text} from 'react-native';
import {getAllPenilaianAtasan} from '../services/PenilaianAtasanService';

const Home = props => {
    // React.useEffect(()=>{
    //     getAllPenilaianAtasan(2,2020).then(response => {
    //         alert(response.message)
    //     })
    // })
    return(
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 40}}>Welcome To Home</Text>
        </View>
    );
}

export default Home;
