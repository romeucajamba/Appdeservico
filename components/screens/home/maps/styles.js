import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E0C16',
    },
    map: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: '400',
        width: '100%',
        marginTop: 800,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
});

export default styles;