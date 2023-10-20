import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E0C16',

    },
    header: {
        flexDirection: 'column',
        backgroundColor: '#0E0C16',
        marginBottom: 0,
        width: '100%',
        padding: 5,
        marginTop: 25,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 40,
        marginTop: 1,
        backgroundColor: '#0E0C16',

    },
    search: {
        color: '#12B3BD',
        position: 'absolute',
        marginLeft: 40,
    },
    searchInput: {
        backgroundColor: '#D9D9D9',
        height: 30,
        textAlign: 'center',
        borderRadius: 15,
        width: '80%',
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 10,
    },
    categorty: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        padding: 5,
    },
    buttomCategory: {
        width: 100,
        height: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#12B3BD',
    },
    categotegoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#12B3BD',
    },
    servicesArea: {
        width: '95%',
        backgroundColor: '#0E0C16',
        marginTop: 2,
    },
    serviceImage: {
        width: 60,
        height: 65,
        marginLeft: 5,
        marginTop: 2,
    },
    requestAndInformation: {
        flexDirection: 'row',
        width: '95%',
        height: 70,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    request: {
        flexDirection: 'column',
        marginLeft: 8,
    },
    favIcon: {
        position: 'absolute',
        marginLeft: 300,
        marginTop: 4,
    },
    text: {
        color: '#12B3BD',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttomIformations: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 8,
        padding: 2,
    },
    informations: {
        color: '#fff',
    },
    buttonMoreRigth: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        shadowRadius: 10,
        shadowColor: '#12B3BD',
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 },
        marginStart: 300,
        marginTop: 550,
    },
});

export default styles;