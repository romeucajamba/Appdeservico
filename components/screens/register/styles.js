import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E0C16',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80
    },
    image: {
        width: 245,
        height: 110,
    },
    errorMessage: {
        color: 'red',
        marginTop: 40,
        marginRight: 100,
        width: '60%',
        height: '5%',
    },
    inputsIcon: {
        flexDirection: 'row',
    },
    icon: {
        position: 'absolute',
        color: '#12B3BD',
        marginLeft: 295,
        marginTop: 40,
        fontWeight: 'bold',
    },
    input: {
        marginTop: 30,
        width: 334,
        height: 40,
        color: '#0E0C16',
        borderWidth: 2,
        borderColor: '#0E0C16',
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: '#f4f4f4',

    },
    logontPress: {
        backgroundColor: '#12B3BD',
        color: '#fff',
        width: 240,
        height: 40,
        borderRadius: 12,
        textAlign: 'center',
        padding: 10,
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold",
    },
    textEmail: {
        color: '#fff',
        fontSize: 15,
        marginLeft: 5,
        marginTop: 15,
    },
    buttonsAuth: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ioIcon: {
        backgroundColor: '#0E0C16',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 50,
        padding: 8,
    },
    feath: {
        backgroundColor: '#0E0C16',
        borderWidth: 1,
        borderColor: '#12B3BD',
        borderRadius: 20,
        padding: 8,
        marginLeft: 8,
    },
    line: {
        color: '#fff',
        fontSize: 20,
    },
    ccount: {
        color: '#fff',
        fontSize: 13,
        marginTop: 10,
    },

    loginButton: {
        backgroundColor: '#12B3BD',
        color: '#fff',
        width: 240,
        height: 40,
        borderRadius: 12,
        textAlign: 'center',
        padding: 10,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLoginBtn: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold",
    },
});


export default styles;