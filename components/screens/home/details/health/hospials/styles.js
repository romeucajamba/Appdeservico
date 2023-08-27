import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E0C16',
    },
    header: {
        width: '100',
        height: '100',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        marginTop: 25,
    },

    title: {
        color: '#fff',
        fontSize: 25,
    },
    descriptions: {
        flexDirection: 'column',
        position: 'absolute',
        width: '100%',
        height: '55%',
        marginTop: 100,
    },
    cover: {
        position: 'absolute',
        width: '100%',
        height: '53%',

        marginBottom: 5,
    },
    textDescription: {
        position: 'absolute',
        marginTop: 250,
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    more: {
        flexDirection: 'column',
        position: 'relative',
        marginLeft: 15,
        marginTop: 400,
    },
    buttonAvaliations: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    icon: {
        color: '#fff',
        marginTop: 8,
    },
    textAvaliations: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 10,
    },
    comentaryArea: {
        marginTop: 25,
        padding: 10,
        flexDirection: 'column',
        width: '100%',
        height: '30%',
    },
    textAvaliation: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 50,
    },
    comentary: {
        flexDirection: 'row',
        marginTop: 25,
        width: '100%',
        height: '50%',
    },
    comentaryInput: {
        color: '#fff',
        backgroundColor: '#161323',
        width: '70%',
        height: '100%',
        textAlign: 'center',
        borderRadius: 8,
        marginLeft: 35,
        marginRight: 5,
    },
    send: {
        marginTop: 90,
        backgroundColor: '#12B3BD',
        padding: 10,
        borderRadius: 10,
        width: '100',
        height: '100',
    },
    iconSend: {
        color: '#fff',
        width: '100%',
        height: '100%',
    },
});

export default styles;