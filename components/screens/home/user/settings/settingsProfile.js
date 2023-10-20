import React from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";



export default function SettingsProfile() {
    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 30, color: '#fff', textAlign: 'center', marginTop: 30 }}>Definições de conta</Text>

            <View style={styles.form}>
                <Text style={{ color: '#fff', fontSize: 24, marginLeft: 10, }}>Tipo</Text>
                <Text style={{ color: '#12B3BD', fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginBottom: 5 }}>Não anuciante</Text>

                <Text style={{ color: '#fff', fontSize: 17, marginTop: 10, marginLeft: 10, marginBottom: 5 }}>Nome completo</Text>
                <TextInput style={styles.inputConatiner} />
                <Text style={{ color: '#fff', fontSize: 17, marginTop: 10, marginLeft: 10, marginBottom: 5 }}>Telemóvel</Text>
                <TextInput style={styles.inputConatiner} />
                <Text style={{ color: '#fff', fontSize: 17, marginTop: 10, marginLeft: 10, marginBottom: 5 }}>Email</Text>
                <TextInput style={styles.inputConatiner} />
                <Text style={{ color: '#fff', fontSize: 17, marginTop: 10, marginLeft: 10, marginBottom: 5 }}>Senha</Text>
                <TextInput style={styles.inputConatiner} />
                <Text style={{ color: '#fff', fontSize: 17, marginTop: 10, marginLeft: 10, marginBottom: 5 }}>Morada(opcional)</Text>
                <TextInput style={styles.inputConatiner} />
                <Text style={{ color: '#fff', fontSize: 17, marginTop: 10, marginLeft: 10, marginBottom: 5 }}>NIF(opcional)</Text>
                <TextInput style={styles.inputConatiner} />

                <TouchableOpacity style={styles.saveChage}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Guardar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#0E0C16',
        },
        form: {
            width: '100%',
            height: '80%',
            marginRight: 10,
            marginLeft: 10,
            marginTop: 10,
        },
        inputConatiner: {
            width: '90%',
            height: 30,
            marginLeft: 10,
            borderWidth: 1,
            borderColor: '#12B3BD',
            borderRadius: 4,
            backgroundColor: '#fff',
            marginTop: 2,
        },
        saveChage: {
            backgroundColor: '#12B3BD',
            width: '50%',
            height: 35,
            borderRadius: 5,
            marginLeft: 80,
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 3,
        },
    }
)