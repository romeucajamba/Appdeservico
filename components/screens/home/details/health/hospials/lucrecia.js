import React from "react";
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import emerg from '../img/hospitals/emerg.webp';



export default function Hospital({ navigation }) {
    function goHome() {
        navigation.navigate('Home');
    }

    function goMap() {
        navigation.navigate('Localização');
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goHome}>
                    <Feather name="home" size={25} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Lucrecia Paín</Text>
            </View>
            <View style={styles.descriptions}>
                <Image source={emerg} style={styles.cover} />
                <Text style={styles.textDescription}>Lucrêcia Paí, hospital fundado em xxxx do ano de xxxxx, conta com grandes profissionais de saúde</Text>
            </View>

            <View style={styles.more}>
                <TouchableOpacity style={styles.buttonAvaliations}>
                    <Feather name="bookmark" size={15} style={styles.icon} />
                    <Text style={styles.textAvaliations}>O que as pessoas acharam?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonAvaliations}>
                    <Feather name="navigation" size={15} style={styles.icon} />
                    <Text style={styles.textAvaliations}>Serviços & preços.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonAvaliations} onPress={goMap}>
                    <Feather name="globe" size={15} style={styles.icon} />
                    <Text style={styles.textAvaliations}>Localização.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonAvaliations}>
                    <Feather name="phone" size={15} style={styles.icon} />
                    <Text style={styles.textAvaliations}>Contactos </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.comentaryArea}>
                <Text style={styles.textAvaliation}>O que achou do serviço?</Text>

                <View style={styles.comentary}>
                    <TextInput placeholder="Escreve teu comentário" style={styles.comentaryInput} />
                    <TouchableOpacity style={styles.send}>
                        <Feather name="send" size={12} style={styles.iconSend} />
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}
