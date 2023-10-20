import React from "react";
import { View, ScrollView, Text, TouchableOpacity, Share } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";



export default function Menu({ navigation }) {

    const onShare = async () => {
        const shareApp = await Share.share({
            message: "Na AngoVerso encontras tudo que você quiser, desde empresas a restaurantes, escolas, mercados e muito mais."
        })
    }

    function loginScreen() {
        navigation.navigate('Bem-vindo de volta!');
    }
    function settings() {
        navigation.navigate('Definições')
    }
    return (
        <View styles={styles.containerBody}>
            <StatusBar style="light" />
            <View style={styles.IconMenu}>
                <View style={styles.menuLeft}>
                    <TouchableOpacity onPress={onShare} style={styles.touchIcon}>
                        <Ionicons name="arrow-redo-sharp" size={25} style={styles.menuIcon} />
                        <Text style={styles.texticon}>Partilhar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchIcon}>
                        <Ionicons name="person-circle-outline" size={25} style={styles.menuIcon} />
                        <Text style={styles.texticon}>Termos e condições</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchIcon}>
                        <Ionicons name="language" size={25} style={styles.menuIcon} />
                        <Text style={styles.texticon}>Idiomas</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuRigth}>

                    <TouchableOpacity style={styles.touchIcon}>
                        <Ionicons name="color-palette" size={25} style={styles.menuIcon} />
                        <Text style={styles.texticon}>Tema</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchIcon} onPress={settings}>
                        <Feather name="settings" size={25} style={styles.menuIcon} />
                        <Text style={styles.texticon}>Definições</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={loginScreen} style={styles.touchIcon}>
                        <Ionicons name="ios-log-out" size={25} style={styles.menuIcon} />
                        <Text style={styles.texticon}>Sair</Text>
                    </TouchableOpacity>

                </View>

            </View>


            <View style={styles.servicesMenu}>


                <View style={styles.textArea}>
                    <Text style={styles.textservices}>Serviços & empresas</Text>
                    <Ionicons name="cash" size={22} style={{ marginLeft: 2 }} color="#12B3BD" />
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.notificateL}>
                            <Text style={styles.notificationTxt}>Restaurante</Text>
                            <Feather name="coffee" size={18} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificateR}>
                            <Text style={styles.notificationTxt}>Hoteis</Text>
                            <Feather name="home" size={18} style={styles.icon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <TouchableOpacity style={styles.notificateL}>
                            <Text style={styles.notificationTxt}>Faculdade</Text>
                            <Feather name="book-open" size={18} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificateR}>
                            <Text style={styles.notificationTxt} >Bancos</Text>
                            <Feather name="credit-card" size={18} style={styles.icon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <TouchableOpacity style={styles.notificateL}>
                            <Text style={styles.notificationTxt}>Loja cameras</Text>
                            <Feather name="crop" size={18} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificateR}>
                            <Text style={styles.notificationTxt} >Parques diversão</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <TouchableOpacity style={styles.notificateL}>
                            <Text style={styles.notificationTxt}>casa jogos</Text>
                            <Feather name="command" size={18} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificateR}>
                            <Text style={styles.notificationTxt} >Centros  formação</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <TouchableOpacity style={styles.notificateL}>
                            <Text style={styles.notificationTxt}>Canais de TV</Text>
                            <Feather name="cast" size={18} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificateR}>
                            <Text style={styles.notificationTxt} >Professores</Text>
                            <Feather name="briefcase" size={18} style={styles.icon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <TouchableOpacity style={styles.notificateL}>
                            <Text style={styles.notificationTxt}>Contabilidade</Text>
                            <Feather name="bar-chart" size={18} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificateR}>
                            <Text style={styles.notificationTxt} >Professores língua</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <TouchableOpacity style={styles.notificateL}>
                            <Text style={styles.notificationTxt}>Cantores</Text>
                            <Feather name="mic" size={18} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificateR}>
                            <Text style={styles.notificationTxt} >Designer</Text>
                            <Feather name="figma" size={18} style={styles.icon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <TouchableOpacity style={styles.notificateL}>
                            <Text style={styles.notificationTxt}>Electrônica</Text>
                            <Feather name="cpu" size={18} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificateR}>
                            <Text style={styles.notificationTxt} >Desenvolvedor de Software</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <TouchableOpacity style={styles.notificateL}>
                            <Text style={styles.notificationTxt}>Fotográfico</Text>
                            <Feather name="camera" size={18} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificateR}>
                            <Text style={styles.notificationTxt} >Centros</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <TouchableOpacity style={styles.notificateL}>
                            <Text style={styles.notificationTxt}>Entregas</Text>
                            <Feather name="box" size={18} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificateR}>
                            <Text style={styles.notificationTxt} >Loja de telemóvel</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
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
            </View>

        </View >

    )
}