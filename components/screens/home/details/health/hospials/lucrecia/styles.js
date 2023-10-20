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

    coverContainer: {
        flexDirection: 'column',
        position: 'absolute',
        width: '100%',
        height: '55%',
        marginTop: 100,
        alignItems: 'center',
    },
    icon: {
        color: '#12B3BD',
        marginTop: 8,
    },
    cover: {
        width: 150,
        height: 150,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#12B3BD',
        marginBottom: 20,
    },
    title: {
        color: '#fff',
        fontSize: 25,
    },
    info: {
        flexDirection: 'row',
        marginTop: 5,
    },
    open: {
        fontSize: 15,
        color: '#12B3BD',
    },
    hour: {
        fontSize: 15,
        color: '#f4f4f4',
        marginLeft: 10,
    },
    contentFild: {
        width: '90%',
        marginTop: 20,
        backgroundColor: '#161323',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#12B3BD',
        borderRadius: 6,
        padding: 3,
    },
    contentText: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 2,
    },

    more: {
        backgroundColor: '#161323',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        flexDirection: 'column',
        position: 'relative',
        height: '65.8%',
        marginTop: 400,
    },
    buttonAvaliations: {
        width: '100%',
        padding: 8,
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'row',
    },

    textAvaliations: {
        color: '#fff',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
    },
    buttonMoreRigth: {
        position: 'absolute',
        width: 48,
        height: 48,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#12B3BD',
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 },
        marginStart: 300,
        marginTop: 670,
        backgroundColor: '#fff'
    },


});



export default styles;