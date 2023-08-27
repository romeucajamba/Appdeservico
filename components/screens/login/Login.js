import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import styles from "./styles";
import logo from '../../img/AngV.png';



export default function Entrar({ navigation }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [messageError, setMessageError] = useState();


    function homeScreen() {
        navigation.navigate('Home')
    }

    function siginScreen() {
        navigation.navigate('Cadastra-se')
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
            <TextInput style={styles.input1} placeholder="Digite seu email" keyboardType="email-address" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input1} placeholder="Digita sua senha" keyboardType="visible-password" value={password} onChangeText={setPassword} />
            <TouchableOpacity style={styles.textPress1} onPress={verification}><Text style={styles.text1}>Acessar conta</Text></TouchableOpacity>
            <TouchableOpacity style={styles.textsPress2}>
                <Feather name="mail" size={22} color="#fff" />
                <Text style={styles.text2}>Entrar com o google</Text>
            </TouchableOpacity>
            <Text style={styles.text3}>___________________________________</Text>
            <Text style={styles.text4}>Nãotem uma conta?</Text>
            <TouchableOpacity style={styles.textPress4} onPress={siginScreen}><Text style={styles.text5}>Cadastrar-se</Text></TouchableOpacity>
        </View>
    )
}
