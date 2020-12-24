import React from 'react';
import {View, Text, Image} from 'react-native';

const Home = props => {


    return(
        <View style={{justifyContent: 'center', alignItems: 'center',marginTop: 200}}>
            <Image style={{height: 200,width: 200,borderRadius: 200/2}} source={{uri: 'https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'}}/>
            <Text style={{fontSize: 40}}></Text>
        </View>
    );
}

export default Home;
