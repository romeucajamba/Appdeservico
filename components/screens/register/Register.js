import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import logo from '../../img/AngV.png'


export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();
    const [messageError, setMessageError] = useState();

    function homeScreen() {
        navigation.navigate('Bem-vindo de volta!')
    }

    function loginScreen() {
        navigation.navigate('Bem-vindo de volta!')
    }


    function verification() {
        if (email == null || password == null || confirmPass == password) {
            setMessageError("Preencha os campos obrigatórios! Senhas não podem ser diferentes.")
            return
        } else {
            loginScreen()
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
            <View style={styles.inputsIcon}>
                <TextInput style={styles.input} placeholder="Confirmar a senha" keyboardType="visible-password" value={password} onChangeText={setConfirmPass} />
                <Ionicons name="lock-closed" size={20} style={styles.icon} />
            </View>
            <TouchableOpacity style={styles.logontPress} onPress={verification}><Text style={styles.textButton}>Cadastrar-se</Text></TouchableOpacity>
            <Text style={styles.textEmail}>Cadastrar-se com</Text>
            <View style={styles.buttonsAuth}>
                <TouchableOpacity>
                    <Ionicons name="ios-logo-google" size={22} color="red" style={styles.ioIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="facebook" size={22} color="#12B3BD" style={styles.feath} />
                </TouchableOpacity>
            </View>
            <Text style={styles.line}>__________________________________</Text>
            <Text style={styles.ccount}>Já tem uma conta?</Text>
            <TouchableOpacity style={styles.loginButton} onPress={loginScreen}><Text style={styles.textLoginBtn}>Acessar conta</Text></TouchableOpacity>
        </View>
    )
}


