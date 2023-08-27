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
        menu: {
            marginTop: 10,
            marginLeft: 50,
        },
        touchIcon: {
            marginTop: 13,
            marginLeft: 50,
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
        titleServices: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#0E0C16',
            width: '100%',
            height: '100%',
        },
        serviceTitle: {
            color: '#fff',
            paddingHorizontal: 15,
            fontSize: 30,
        },
        titleServicesFarm: {
            marginTop: 400,
            position: 'absolute',
        },
        farmTitle: {
            color: '#fff',
            marginLeft: 15,
            fontSize: 30,

        },
        serviceConteinaer: {
            position: 'absolute',
            width: '99%',
            height: '130%',
            marginLeft: 8,
            marginTop: 200,
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 10,
            display: 'flex',
            backgroundColor: '#161323',
        },
        serviceFarm: {
            position: 'absolute',
            backgroundColor: '#161323',
            width: '99%',
            height: '130%',
            marginLeft: 8,
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 10,
            display: 'flex',
            marginTop: 450,
        },
        titleServiceSchool: {
            marginTop: 650,
            position: 'absolute',
        },
        servicesSchool: {
            position: 'absolute',
            backgroundColor: '#161323',
            width: '99%',
            height: '130%',
            marginLeft: 8,
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 10,
            display: 'flex',
            marginTop: 700,
        },
        serviceArea: {
            height: '100%',
        },
        serviceAreaRight: {
            height: '100%',
            marginLeft: 100,
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
            color: '#fff',
        },

        footer: {
            marginLeft: 8,
        },
        detail: {
            fontSize: 13,
            color: '#fff',
            textTransform: 'capitalize',
        },
        moreServices: {
            position: 'absolute',
            backgroundColor: '#0E0C16',
            marginLeft: 8,
            padding: 10,
            paddingHorizontal: 15,
            marginTop: 950,

        },
        buttonMore: {
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            marginLeft: 50,
        },
        moreServicesText: {
            color: '#fff',
            fontSize: 20,
            marginRight: 5,
            textDecorationLine: 'underline',
        },
        barUser: {

            display: 'flex',
            flexDirection: 'row',
            marginTop: 800,
            backgroundColor: '#161323',
            width: '100%',
            height: '45%',
            justifyContent: 'space-around',
            padding: 10,
        },
        icon: {
            color: '#fff',
        },
    }
)

export default styles;