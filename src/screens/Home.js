import React from 'react';
import {View, Text, Image} from 'react-native';
import {getProfilePersonnel} from "../services/ProfileService";

const Home = props => {
    const [data, setData] = React.useState({})
    const [time, setTime] = React.useState('')

    React.useEffect(() => {
        getProfilePersonnel().then(response => {
            setData(response.data)
        })
        getTime()
    },[])

    const getTime = () => {
        const hour = new Date().getHours()

        if (hour>=0 && hour<=11){
            setTime("Selamat Pagi")
        }else if (hour>11 && hour<=14){
            setTime("Selamat Siang")
        }else if (hour>14 && hour<=17){
            setTime("Selamat Sore")
        }else if (hour==18){
            setTime("Selamat Petang")
        }else if (hour>18 && hour<=23){
            setTime("Selamat Malam")
        }else {
            setTime("Selamat Datang")
        }
    }

    return(
        <View style={{justifyContent: 'center', alignItems: 'center',marginTop: 200}}>
            <Image style={{height: 200,width: 200,borderRadius: 200/2}} source={require('../profile_placeholder.png')}/>
            <Text style={{fontSize: 35, marginTop: 30, marginBottom: 50}}>{time}</Text>
            <Text style={{fontSize: 23}}>{data.nm_peg}</Text>
        </View>
    );
}

export default Home;
