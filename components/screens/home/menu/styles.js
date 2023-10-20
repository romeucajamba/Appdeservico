import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerBody: {
        flex: 1,
    },
    IconMenu: {
        flexDirection: 'row',
        backgroundColor: '#0E0C16',
        borderTopWidth: 2,
        borderTopColor: '#fff',
        borderBottomWidth: 2,
        borderBottomColor: '#fff',


    },
    menuLeft: {
        width: '50%',
        height: '100%',
        marginBottom: 10,
    },
    menuRigth: {
        marginLeft: 20,
        width: '50%',
        height: '100%',
        marginBottom: 10,
    },
    touchIcon: {
        backgroundColor: '#161323',
        borderRadius: 5,
        padding: 7,
        marginTop: 13,
        marginLeft: 20,
        width: '60%',
        height: 50,
        flexDirection: 'row'
    },
    texticon: {
        color: '#fff',
        marginTop: 4,
        marginLeft: 4,
    },
    menuIcon: {
        color: '#12B3BD',
    },
    servicesMenu: {
        borderTopColor: '#fff',
        height: '100%',
        height: 457,
        backgroundColor: '#161323',
        padding: 1,
    },

    textArea: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textservices: {
        color: '#12B3BD',
        fontSize: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#0E0C16',
    },

    notificateL: {
        width: '45%',
        height: '250',
        marginTop: 5,
        marginBottom: 1,
        borderRadius: 5,
        backgroundColor: '#161323',
        flexDirection: 'row',
        padding: 5,
    },
    notificateR: {
        width: '45%',
        height: '250',
        marginTop: 5,
        marginBottom: 1,
        borderRadius: 5,
        marginLeft: 5,
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
    icon: {
        color: '#12B3BD',
        marginLeft: 5,
        marginTop: 3,
    },
});

export default styles;