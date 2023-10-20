import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import styles from "./styles";
import logo from '../../img/AngV.png';


export default function PassWord({ navigation }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [messageError, setMessageError] = useState();



    function homeScreen() {
        navigation.navigate('Home')
    }


    function verification() {
        if (email == null || password == null) {

            setMessageError("Preencha os campos obrigatórios")
            return

        } else {

            setEmail(null)
            setPassword(null)
            homeScreen()
            console.log(`${email}  ${password}`)
            return

        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={logo}
                style={styles.image}
            />
            <Text style={styles.errorMessage}>{messageError}</Text>
            <View style={styles.inputsIcon}>
                <TextInput style={styles.input} placeholder="Digite seu email ou telemóvel" keyboardType="email-address" value={email} onChangeText={setEmail} />
                <Ionicons name="person" size={20} style={styles.icon} />
            </View>
            <View style={styles.inputsIcon}>
                <TextInput style={styles.input} placeholder="Digita sua senha nova" keyboardType="visible-password" value={password} onChangeText={setPassword} />
                <Ionicons name="lock-closed" size={20} style={styles.icon} />
            </View>
            <TouchableOpacity style={styles.ButtontPress} onPress={verification}><Text style={styles.textButton}>Enviar</Text></TouchableOpacity>
        </View>
    )
}