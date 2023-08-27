import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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
            setMessageError("Preencha os campos obrigatórios, senha não pode ser diferente")
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
            <TextInput style={styles.input1} placeholder="Digite seu email" keyboardType="email-address" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input2} placeholder="Digita sua senha" keyboardType="visible-password" value={password} onChangeText={setPassword} />
            <TextInput style={styles.input3} placeholder="Confirme a sua senha" keyboardType="visible-password" value={confirmPass} onChangeText={setConfirmPass} />
            <TouchableOpacity style={styles.textPress1} onPress={verification}><Text style={styles.text1}>Cadastrar-se</Text></TouchableOpacity>
            <TouchableOpacity style={styles.textsPress2}>
                <Feather name="mail" size={22} color="#fff" />
                <Text style={styles.text2}>Cadastrar-se com o google</Text>
            </TouchableOpacity>
            <Text style={styles.text3}>__________________________________</Text>
            <Text style={styles.text4}>Já tem uma conta?</Text>
            <TouchableOpacity style={styles.textPress4} onPress={loginScreen}><Text style={styles.text5}>Acessar conta</Text></TouchableOpacity>
        </View>
    )
}


