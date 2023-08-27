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
        paddingHorizontal: 15,
        alignItems: 'center',
        marginVertical: 2,
        width: '100%',
        height: 37,
        marginTop: 20,
        backgroundColor: '#0E0C16',
        elevation: 2,
    },
    search: {
        marginTop: 1,
        marginLeft: 25,
        position: 'absolute',
        color: '#000',

    },
    searchInput: {
        backgroundColor: '#D9D9D9',
        width: 300,
        height: 30,
        marginLeft: 20,
        paddingHorizontal: 10,
        textAlign: 'center',
        borderRadius: 40,
        width: '90%',
    },
});

export default styles;