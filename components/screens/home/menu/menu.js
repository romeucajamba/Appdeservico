import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import styles from "./styles";



export default function Menu() {
    return (
        <ScrollView style={styles.scrooll}>
            <StatusBar style="light" />
            <View style={styles.containerA}>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Restaurante</Text>
                    <Feather name="coffee" size={18} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateR}>
                    <Text style={styles.notificationTxt}>Hoteis</Text>
                    <Feather name="home" size={18} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.containerB}>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Faculdade</Text>
                    <Feather name="book-open" size={18} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateR}>
                    <Text style={styles.notificationTxt} >Bancos</Text>
                    <Feather name="credit-card" size={18} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.containerD}>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Loja cameras</Text>
                    <Feather name="crop" size={18} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateR}>
                    <Text style={styles.notificationTxt} >Parques diversão</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerD}>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>casa jogos</Text>
                    <Feather name="command" size={18} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateR}>
                    <Text style={styles.notificationTxt} >Centros  formação</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerD}>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Canais de TV</Text>
                    <Feather name="cast" size={18} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateR}>
                    <Text style={styles.notificationTxt} >Professores</Text>
                    <Feather name="briefcase" size={18} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.containerD}>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Contabilidade</Text>
                    <Feather name="bar-chart" size={18} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateR}>
                    <Text style={styles.notificationTxt} >Professores língua</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerD}>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Cantores</Text>
                    <Feather name="mic" size={18} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateR}>
                    <Text style={styles.notificationTxt} >Designer</Text>
                    <Feather name="figma" size={18} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.containerD}>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Electrônica</Text>
                    <Feather name="cpu" size={18} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateR}>
                    <Text style={styles.notificationTxt} >Desenvolvedor de Software</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerD}>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Fotográfico</Text>
                    <Feather name="camera" size={18} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateR}>
                    <Text style={styles.notificationTxt} >Telecomunuicações</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerD}>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Entrgas</Text>
                    <Feather name="box" size={18} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateR}>
                    <Text style={styles.notificationTxt} >Loja de telemóvel</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerD}>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Decoração</Text>
                    <Feather name="award" size={18} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateR}>
                    <Text style={styles.notificationTxt} >Escola</Text>
                    <Feather name="book" size={18} style={styles.icon} />
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}