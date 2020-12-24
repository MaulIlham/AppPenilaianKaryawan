import React from 'react';
import { View, Image, Dimensions} from 'react-native';
import {TextInput} from "react-native-paper";
import Spinner from "react-native-spinkit";

const LoadingScreen = props => {
    const [flag, setFlag] = React.useState(false)

    React.useEffect(()=>{
        setTimeout(()=>{
            if (flag) {
                props.navigation.navigate("MenuHome")
            }else {
                setFlag(true)
                props.navigation.navigate("SignIn")
            }
        },3000)
    },[])

    const height = Dimensions.get('window').height
    const widht = Dimensions.get('window').width

    return(
        <View style={{justifyContent: 'center', alignItems: 'center',backgroundColor: '#FFFFFF',height: height, widht: widht}}>
            {/*<View style={{flexDirection: 'row', flex: 1,backgroundColor: '#091dd6',height: height, widht: widht}}>*/}
                <Image source={require('../logo_lit.jpg')} style={{width: 250, height: 110}} resizeMode="stretch"/>
            {/*</View>*/}
            <Spinner style={{marginBottom: 50, marginTop: 40}} isVisible={true} size={50} type={'Circle'} color={"#0077e6"}/>
        </View>
    )
}

export default LoadingScreen;
