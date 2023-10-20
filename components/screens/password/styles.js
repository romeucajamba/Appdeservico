import { StyleSheet } from "react-native";



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#0E0C16',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 80
        },
        image: {
            width: 245,
            height: 110,
        },
        errorMessage: {
            color: 'red',
            marginTop: 40,
            marginRight: 70,
        },
        inputsIcon: {
            flexDirection: 'row',
        },
        input: {
            marginTop: 30,
            width: 334,
            height: 40,
            color: '#0E0C16',
            borderWidth: 2,
            borderColor: '#0E0C16',
            paddingLeft: 10,
            borderRadius: 10,
            backgroundColor: '#f4f4f4',
        },
        icon: {
            position: 'absolute',
            color: '#12B3BD',
            marginLeft: 295,
            marginTop: 40,
            fontWeight: 'bold',
        },
        ButtontPress: {
            backgroundColor: '#12B3BD',
            color: '#fff',
            width: 200,
            height: 40,
            borderRadius: 12,
            textAlign: 'center',
            padding: 10,
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textButton: {
            color: '#fff',
            fontSize: 15,
            fontWeight: "bold",
        },
    }
)

export default styles;