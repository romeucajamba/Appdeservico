import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    scrooll: {
        backgroundColor: '#0E0C16',
    },
    containerA: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginTop: 1,
        backgroundColor: '#0E0C16',
    },
    containerB: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginTop: 1,
        backgroundColor: '#0E0C16',
    },
    notificateL: {
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