import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    notifications: {
        flex: 1,
        backgroundColor: '#0E0C16',
    },

    notificationsMark: {
        backgroundColor: '#0E0C16',
        width: '100%',
        height: '5%',
        marginTop: 5,
        marginBottom: 5,
    },
    buttonmark: {
        marginLeft: 50,
        width: '75%',
        padding: 5,
        backgroundColor: '#161323',
    },

    texMark: {
        color: '#12B3BD',
        fontSize: 18,
        marginLeft: 20,
    },
    scrooll: {
        backgroundColor: '#0E0C16',
    },
    status: {
        marginTop: 4,
        textAlign: 'left',
        color: '#12B3BD',
        fontSize: 15,
        fontWeight: 'bold',

    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginTop: 1,
        backgroundColor: '#161323',
    },
    servcImgNotf: {
        width: 50,
        height: 30,
        borderRadius: 50,
    },
    userOrServc: {
        borderRadius: 50,
        width: 28,
        height: 29,
    },
    notificateNews: {
        width: '100%',
        height: '250',
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#161323',
        flexDirection: 'row',
        padding: 5,
    },
    notificationTxt: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'justify',
        marginLeft: 10,
    },

});
export default styles;