import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E0C16',
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: '#0E0C16',
        marginTop: 35,
        borderBottomWidth: 4,
        borderBottomColor: '#12B3BD',
    },
    angUser: {
        width: 40,
        height: 45,
        borderRadius: 150,
        marginLeft: 4,
        marginBottom: 4,
    },
    title: {
        color: '#12B3BD',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 1,
        marginBottom: 4,
    },
    userInformation:{
        flexDirection: 'row',
        width: '50%',
        height: 50,
    },
    optionButton: {
        marginTop: 10,
        marginLeft: 140,
    },
    options: {
        color: '#12B3BD',
        fontWeight: 'bold',
    },
    messageArea: {
        backgroundColor: '#161323',
        width: '100%',
        height: '78%',
        padding: 5,
    },
    messagemBox: {
        flexDirection: 'column',
        width: 280,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#12B3BD',
        padding: 5,
    },
    messagemBoxClient: {
        flexDirection: 'row',
        width: 280,
        marginTop: 10,
        marginLeft: 60,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 5,

    },
    subjt: {
        fontSize: 17,
        marginLeft: 4,
        color: '#fff'
    },
    subjtClient: {
        fontSize: 17,
        marginLeft: 4,
        color: '#12B3BD',
    },
    messageInputArea: {
        marginTop: 2,
        flexDirection: 'row',
        width: '100%',
        height: 80,
        marginBottom: 20,
        backgroundColor: '#0E0C16',
        borderTopWidth: 2,
        borderTopColor: '#12B3BD',
    },
    input: {
        backgroundColor: '#f5f5f5',
        width: '75%',
        height: 55,
        marginLeft: 3,
        borderWidth: 2,
        borderColor: '#12B3BD',
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 10,
    },

    buttonSend: {
        marginTop: 20,
        marginLeft: 5,
        width: '20%',
        height: '55%',
        alignItems: 'center',
    },
    send: {
        color: '#12B3BD',
        fontWeight: 'bold',
    },
    buttonMoreRigth: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#12B3BD',
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 },
        marginStart: 300,
        marginTop: 550,
        backgroundColor: '#fff',
    },
})

export default styles;