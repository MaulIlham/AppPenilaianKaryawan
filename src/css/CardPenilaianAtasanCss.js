import { StyleSheet} from 'react-native';

const styles =StyleSheet.create({
    btnCard:{
      width: 390,
      height: 113,
      borderBottomWidth: 2,
      borderColor: '#a6a6a6'
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 60/2,
    },
    viewCard:{
        flexDirection: 'row',
        marginLeft: 10,
    },
    viewCardTextColumn:{
        flexDirection: 'column',
        flex: 1
    },
    viewCardTextRow:{
        flexDirection: 'row'
    },
    txtTitle:{
        fontSize: 9,
    },
    txtData:{
        fontSize: 17,
    }
})

export default styles;
