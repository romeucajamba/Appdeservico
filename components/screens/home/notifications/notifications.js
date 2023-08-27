import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import styles from './styles'


export default function Notifications() {
    return (
        <ScrollView style={styles.scrooll}>
            <StatusBar style="light" />
            <View style={styles.containerA}>

                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Confira os nosso serviços novos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Osvaldo prestação de serviços agora faz parte da grnade...</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Novos cartões adicionados na wise</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Serviços novos no BAI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Conheça novos itens da Amanda Tech</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Confira os nosso serviços novos Angola Telecom</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.containerB}>

                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Confira os novos serviços da Lucrecia.  Há 10minut.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>AngoMart adiciobnou novo stock.   Há 10minut.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Novos pintores no app AngoVerso.   Há 45mint.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Confira os produtos novos da margarida prestacões.    Há 1h.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Confira os nosso serviços novos adicionados Tv Center.     Há 1h.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Confira os nosso serviços da Tec.   Há 3h.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Confira os nosso serviços novos.   Há 3h.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Confira os nosso serviços novos.  Há 4h.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Confira os preços novos do Alpha Projetos.  Há 4 dias</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificateL}>
                    <Text style={styles.notificationTxt}>Confira os nosso serviços novos.   Há 1 semana</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}