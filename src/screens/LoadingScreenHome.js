import React from 'react';
import { View, Image, Dimensions} from 'react-native';
import Spinner from "react-native-spinkit";

const LoadingScreenHome = props => {

    React.useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate("MenuHome")
        },3000)
    },[])

    const height = Dimensions.get('window').height
    const widht = Dimensions.get('window').width

    return(
        <View style={{justifyContent: 'center', alignItems: 'center',backgroundColor: '#FFFFFF',height: height, widht: widht}}>
            <Image source={require('../logo_lit.jpg')} style={{width: 250, height: 110}} resizeMode="stretch"/>
            <Spinner style={{marginBottom: 50, marginTop: 40}} isVisible={true} size={50} type={'Circle'} color={"#0077e6"}/>
        </View>
    )
}

export default LoadingScreenHome;
