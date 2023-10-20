import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#0E0C16',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 40,
        marginTop: 55,
        backgroundColor: '#0E0C16',

    },
    searchInput: {
        backgroundColor: '#D9D9D9',
        height: 30,
        textAlign: 'center',
        borderRadius: 15,
        width: '80%',
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 20,
    },
    userMessagearea: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    userArea: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        alignItems: 'center',
        backgroundColor: '#161323',
    },

    userPhoto: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 40,
        marginLeft: 8,
    },
    messageDeatilsArea: {
        flexDirection: 'column',
        width: '80%',
        marginLeft: 8,
    },
    messagem: {
        color: '#fff',
    },
})

export default styles;