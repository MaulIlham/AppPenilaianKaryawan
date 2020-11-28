import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
    },
    txtInput:{
        flex: 1,
        paddingRight: 15,
        paddingLeft: 15,
        color: '#05375a',
        fontSize: 17,
        borderColor: '#000',
        borderRadius: 1,
    },
    viewInput:{
        flexDirection: 'row',
        height: 45,
        width: 300,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center'
    },
    btnLogin:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1cd7e8',
        height: 50,
        padding: 10,
        marginTop: 10,
    },
    cardLogin:{
        marginLeft: 30,
        width: 340,
        height: 360,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: 'center'
    },
    backgroundImage:{
        flex:1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    icons:{
        textAlign: 'center',
        textAlignVertical: 'center',
        marginRight: 20,
    },
    txtTitle:{
        fontSize: 30,
        color: 'white'
    },
    viewTitle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -100,
        marginBottom: 150
    },
    viewCaptcha:{
        backgroundColor: '#24a800',
        height: 50,
        width: 80,
        marginTop: 10,
        marginBottom: 7,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles;
