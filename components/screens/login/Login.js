import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
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
    function passRecuperation() {
        navigation.navigate('PassWord')
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
                <TextInput style={styles.input} placeholder="Digita sua senha" keyboardType="visible-password" value={password} onChangeText={setPassword} />
                <Ionicons name="lock-closed" size={20} style={styles.icon} />
            </View>
            <TouchableOpacity style={styles.fogotPass} onPress={passRecuperation}><Text style={styles.forgotText}>Esqueceu a senha?</Text></TouchableOpacity>
            <TouchableOpacity style={styles.ButtontPress} onPress={verification}><Text style={styles.textButton}>Acessar conta</Text></TouchableOpacity>
            <Text style={styles.textEmail}>Entrar com</Text>
            <View style={styles.buttonsAuth}>
                <TouchableOpacity>
                    <Ionicons name="ios-logo-google" size={22} color="red" style={styles.ioIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="facebook" size={22} color="#12B3BD" style={styles.feath} />
                </TouchableOpacity>
            </View>
            <Text style={styles.line}>___________________________________</Text>
            <Text style={styles.createCount}>Nãotem uma conta?</Text>
            <TouchableOpacity style={styles.signUpButton} onPress={siginScreen}><Text style={styles.textButton}>Cadastrar-se</Text></TouchableOpacity>
        </View>
    )
}
