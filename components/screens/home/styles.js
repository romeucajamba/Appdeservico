import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#0E0C16',
        },
        header: {
            flexDirection: 'row',
            backgroundColor: '#0E0C16',
            marginBottom: 0,
            width: '100%',
            padding: 5,
            marginTop: 25,
        },
        title: {
            color: '#12B3BD',
            fontSize: 20,
            marginTop: 10,
            marginLeft: 20,
            fontWeight: 'bold',
        },
        icon: {
            color: '#fff',
        },
        userCount: {
            marginTop: 13,
            marginLeft: 85,
        },
        touchIcon: {
            marginTop: 13,
            marginLeft: 30,
        },
        menu: {
            marginTop: 10,
            marginLeft: 30,
        },

        searchBar: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: 40,
            marginTop: 1,
            backgroundColor: '#0E0C16',
            borderWidth: 1,
            borderBottomColor: '#fff',

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
        serviceConteiner: {
            flexDirection: 'column',
            width: '100%',
            height: 250,
        },
        containerTitle: {
            width: '100%',
            height: '20%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 3,
            flexDirection: 'row'
        },
        serviceTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#12B3BD',
            marginRight: 5,
        },

        serviceArea: {
            height: '100%',
            height: '100%',
            backgroundColor: '#D9D9D9',
            marginLeft: 2,
            borderRadius: 5,
            padding: 5,
        },
        serviceAreaRight: {
            height: '100%',
            marginLeft: 20,
            backgroundColor: '#D9D9D9',
            borderRadius: 5,
            padding: 5,

        },
        cover: {
            width: 170,
            height: 110,
            borderRadius: 10,
            marginBottom: 5,
        },
        companyTitle: {
            marginLeft: 5,
            marginBottom: 8,
            fontSize: 15,
            fontWeight: 'bold',
            color: '#0E0C16',
        },

        footer: {
            backgroundColor: '#12B3BD',
            width: '95%',
            height: 35,
            borderRadius: 5,
            marginLeft: 4,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 3,
        },
        detail: {
            fontSize: 13,
            fontWeight: 'bold',
            marginLeft: 4,
            color: '#fff',
            textTransform: 'capitalize',
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

    }
)

export default styles;