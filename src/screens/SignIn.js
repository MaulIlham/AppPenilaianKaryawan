import React from 'react';
import {
    View,
    Text,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Alert,
} from 'react-native';
import {Card} from 'react-native-paper';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconFontAwesom from 'react-native-vector-icons/FontAwesome';
import styles from '../css/SignInCss';
import {signIn} from '../services/AuthService';
import {storeData} from '../data/TokenStorage';

const image = { uri: "https://tipskomputer.net/wp-content/uploads/2017/10/cara-belajar-komputer.png"};

const SignIn = props => {
    const [visible, setVisibility] = React.useState(false);
    const [data, setData] = React.useState({
        username: '',
        password: '',
    });
    const [captcha, setCaptcha]=React.useState(0);
    const [number1, setNumber1]=React.useState(0);
    const [number2, setNumber2]=React.useState(0);
    const iconPassword = !visible ? 'eye-slash' : 'eye';
    const height = (props.height);

    React.useEffect(()=>{
        handleCaptcha();
    },[])

    const handleCaptcha = () => {
        var RandomNumber1 = Math.floor(Math.random() * 9 ) + 1;
        var RandomNumber2 = Math.floor(Math.random() * 9 ) + 1;
        setNumber1(RandomNumber1);
        setNumber2(RandomNumber2);
    }

    const handleSignIn = () => {
        const resultCaptcha = number1 + number2;
        signIn(data).then(response => {
            if (response.message==="Username atau Password Salah,Ulangi!"){
                Alert.alert("",response.message)
            }else if (resultCaptcha!=captcha){
                Alert.alert(
                    "",
                    "Captcha Salah!",
                    [
                        {
                            Text: "OK",
                            onPress: () => handleCaptcha(),
                        }
                    ], { cancelable: false });
            }else if (response.message==="Login Sukses!" && resultCaptcha==captcha){
               storeData(response.token);
               Alert.alert(
                   "",
                   response.message,
                   [
                       {
                           Text: "OK",
                           onPress: () => props.navigation.navigate("MenuHome"),
                       }
                   ], { cancelable: false });
            }
        });
    }
    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.backgroundImage}>
                <View style={styles.viewTitle}>
                    <Text style={styles.txtTitle}>Selamat Datang Di</Text>
                    <Text style={styles.txtTitle}>Aplikasi Penilaian</Text>
                    <Text style={styles.txtTitle}>Perilaku Karyawan</Text>
                </View>
                <Card style={styles.cardLogin}>
                    <Card.Content>
                        <View style={styles.viewInput}>
                            <IconFontAwesom name="user-circle" size={20} style={{marginLeft: 10}}/>
                            <TextInput
                                placeholder="Input Username"
                                style={styles.txtInput}
                                onChangeText={(text) => setData({...data, username: text})}
                            />
                        </View>

                        <View style={styles.viewInput}>
                            <IconFoundation name="shield" color={"#333"} size={25} style={{marginLeft: 10}}/>
                            <TextInput
                                placeholder="Input Password"
                                secureTextEntry={!visible}
                                style={styles.txtInput}
                                onChangeText={(text)=>setData({...data, password: text})}
                            />
                            <IconFontAwesom
                                name={iconPassword}
                                color={"#333"}
                                onPress={()=>setVisibility(!visible)}
                                size={25}
                                style={[styles.icons,{height: height, width: height}]}
                            />
                        </View>

                        <View style={styles.viewCaptcha}>
                            <Text style={{fontSize:20,color:'white'}}>{number1} + {number2} = </Text>
                        </View>

                        <View style={styles.viewInput}>
                            <IconFontAwesom name="question-circle" size={25} style={{marginLeft: 10}}/>
                            <TextInput
                                placeholder="Input Answer"
                                style={styles.txtInput}
                                keyboardType={'numeric'}
                                onChangeText={(text)=>setCaptcha(text)}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.btnLogin}
                            onPress={()=>handleSignIn()}
                        >
                            <Text style={{fontSize:20}}>Login</Text>
                        </TouchableOpacity>
                    </Card.Content>
                </Card>
            </ImageBackground>
        </View>
    );
}

export default SignIn;
