import { StyleSheet} from 'react-native';

const styles =StyleSheet.create({
    btnCard:{
      width: 380,
      height: 113,
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
        fontSize: 14,
    }
})

export default styles;
