import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'
import emerg from '../../img/hospitals/emerg.webp';



export default function Hospital({ navigation }) {
    function goHome() {
        navigation.navigate('Home');
    }

    function avaliations() {
        navigation.navigate('Avaliação')
    }

    function goMap() {
        navigation.navigate('Localização');
    }
    function goService() {
        navigation.navigate('Serviços')
    }

    function goChat() {
        navigation.navigate('UserMessage');
    }
    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity onPress={goHome} style={styles.buttonHome}>
                    <Feather name="home" size={25} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginLeft: 250, marginTop: 8, }}>
                    <Feather name="menu" size={24} color="#12B3BD" />
                </TouchableOpacity>

            </View>
            <View style={styles.coverContainer}>
                <Image source={emerg} style={styles.cover} />
                <Text style={styles.title}>Lucrecia Paín</Text>
                <View style={styles.info}>
                    <Ionicons name="timer" size={20} color="#12B3BD" />
                    <Text style={styles.open}>Aberto</Text>
                    <Text style={styles.hour}>08:00 AM - 11PM</Text>
                </View>

                <View style={styles.contentFild}>
                    <Text style={styles.contentText}>Lucrecia pain é um hoispital hdhdhhjdbndbdhhjfhffjkdfjkdfdfndnddfjd
                        ffggfdsghdhdhjhjhjhjhjhjhjduiufbfdfjdfdfnnfndfndfnmdfnmdmmm,m,ffggfds
                    </Text>
                </View>
            </View>

            <View style={styles.more}>
                <ScrollView>
                    <TouchableOpacity style={styles.buttonAvaliations} onPress={avaliations}>
                        <Ionicons name="chatbox" size={20} color="#fff" style={styles.icon} />
                        <Text style={styles.textAvaliations}>Avaliações de clientes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonAvaliations} onPress={goService}>
                        <Ionicons name="cash-sharp" size={20} color="#fff" style={styles.icon} />
                        <Text style={styles.textAvaliations}>Serviços</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonAvaliations} onPress={goMap}>
                        <Ionicons name="map" size={20} color="#fff" style={styles.icon} />
                        <Text style={styles.textAvaliations}>Localização</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonAvaliations} onPress={goChat}>
                        <Feather name="book-open" size={30} style={styles.icon} />
                        <Text style={styles.textAvaliations}>reclamações</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>

            <TouchableOpacity style={styles.buttonMoreRigth}>
                <Feather name="phone" size={25} color="#12B3BD" />
            </TouchableOpacity>
        </View >
    )
}
