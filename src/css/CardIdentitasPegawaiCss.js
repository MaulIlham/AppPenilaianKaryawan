import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      marginTop: 10,
      marginBottom: 10,
    },
    cardPegawai:{
        flexDirection: 'column',
        flex: 1,
    },
    card:{
      height: 180,
      width: 380,
      marginLeft: 7,
      marginRight: 10
    },
    viewColumn:{
        flex: 1,
        flexDirection: 'column',
    },
    viewRow:{
        flexDirection: 'row'
    },
    txtTitle:{
        fontSize: 9
    },
    txtData:{
        fontSize: 15,

    }
})

export default styles;
