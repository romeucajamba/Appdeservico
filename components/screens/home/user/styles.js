import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#0E0C16',
    },
    userInforfamtion: {
        flexDirection: 'column',
        width: '100%',
        height: 200,
    },

    userPhoto: {
        marginTop: 50,
        width: 80,
        height: 78,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginLeft: 145,
    },
    photo: {
        width: 79,
        height: 60,
    },
    userData: {
        width: '100%',
        height: 71,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        marginTop: 10,
    },

    date: {
        color: '#fff',
        fontSize: 17,
        marginTop: 10,
    },
    dateIformation: {
        fontSize: 17,
        color: '#fff',
        marginTop: 10,
    },
    userSettings: {
        width: '100%',
        height: 400,
        marginTop: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        width: 300,
        height: 40,
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texticon: {
        color: '#12B3BD',
        fontSize: 20,
        marginLeft: 4,
    },
})
export default styles;