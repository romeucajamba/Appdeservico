import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#0E0C16',
    },
    header: {
        width: '100%',
        height: 85,
        flexDirection: 'row',
    },
    iconBack: {
        width: '20%',
        height: 30,
        marginTop: 30,
        marginLeft: 20,
    },
    avaliationsStars: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 10,
        width: '70%',
        height: 30,
    },

    textAvaliations: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    stars: {
        backgroundColor: 'transparent',
        color: '#E7A74e',
        textShadowColor: '#000',
        textShadowRadius: 1,
        marginLeft: 11.8,
        marginTop: 3,
    },

    comentaryArea: {
        backgroundColor: '#161323',
        marginBottom: 10,
        padding: 7,
    },
    backGround: {
        flexDirection: 'column',
        backgroundColor: '#0E0C16',
        width: '100%',
        height: '65.8%',
        padding: 5,
    },
    user: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    avatar: {
        borderRadius: 50,
        width: 30,
        height: 40,
    },

    nameUser: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#12B3BD',
    },
    commentUser: {
        marginTop: 10,
        marginLeft: 17,
        borderLeftWidth: 7,
        borderLeftColor: '#12B3BD',
    },
    subjt: {
        fontSize: 17,
        marginLeft: 10,
        color: '#fff'
    },
    commentPlace: {
        flexDirection: 'column',
        backgroundColor: '#161323',
        width: '100%',
        height: '15%',
        marginBottom: 10,
    },
    txtCommenty: {
        color: '#12B3BD',
        marginTop: 10,
        fontWeight: 'bold',
        marginLeft: 60,
    },

    inputComentary: {
        marginTop: 15,
        flexDirection: 'row',
        width: '100%',
        height: '55%',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#f5f5f5',
        width: '75%',
        height: '98%',
        marginLeft: 3,
        borderWidth: 2,
        borderColor: '#12B3BD',
        borderRadius: 10,
        paddingLeft: 10,
    },

    buttonSend: {
        marginTop: 23,
        marginLeft: 5,
        width: '20%',
        height: '55%',
        alignItems: 'center',
    },
    send: {
        color: '#12B3BD',
        fontWeight: 'bold',
    },

});
export default styles;