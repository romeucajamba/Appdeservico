import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from "expo-status-bar";
import logo from '../../../img/AngV.png';
import Avatar from '../../../img/avatar/avatar.png';
import styles from './styles'


export default function Notifications() {
    return (
        <View style={styles.notifications}>
            <StatusBar style="light" />

            <View style={styles.notificationsMark}>
                <TouchableOpacity style={styles.buttonmark}>
                    <Text style={styles.texMark}>Marcar todas como lidas</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrooll}>

                <View style={styles.container}>

                    <Text style={styles.status}>Novas</Text>

                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={logo} style={styles.servcImgNotf} />
                        <Text style={styles.notificationTxt}>Confira os nosso serviços novos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={Avatar} style={styles.userOrServc} />
                        <Text style={styles.notificationTxt}>Osvaldo prestação de serviços agora faz parte da grnade...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={Avatar} style={styles.userOrServc} />
                        <Text style={styles.notificationTxt}>Novos cartões adicionados na wise</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={Avatar} style={styles.userOrServc} />
                        <Text style={styles.notificationTxt}>Serviços novos no BAI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={Avatar} style={styles.userOrServc} />
                        <Text style={styles.notificationTxt}>Conheça novos itens da Amanda Tech</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={Avatar} style={styles.userOrServc} />
                        <Text style={styles.notificationTxt}>Confira os nosso serviços novos Angola Telecom</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.container}>

                    <Text style={styles.status}>Antigas</Text>

                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={Avatar} style={styles.userOrServc} />
                        <Text style={styles.notificationTxt}>Confira os novos serviços da Lucrecia.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={Avatar} style={styles.userOrServc} />
                        <Text style={styles.notificationTxt}>AngoMart adiciobnou novo stock.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={logo} style={styles.servcImgNotf} />
                        <Text style={styles.notificationTxt}>Novos pintores no app AngoVerso.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={Avatar} style={styles.userOrServc} />
                        <Text style={styles.notificationTxt}>Confira os produtos novos da margarida prestacões.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={Avatar} style={styles.userOrServc} />
                        <Text style={styles.notificationTxt}>Confira os nosso serviços novos adicionados Tv Center.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={logo} style={styles.servcImgNotf} />
                        <Text style={styles.notificationTxt}>Confira os nosso serviços da Tec.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={logo} style={styles.servcImgNotf} />
                        <Text style={styles.notificationTxt}>Confira os nosso serviços novos.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={logo} style={styles.servcImgNotf} />
                        <Text style={styles.notificationTxt}>Confira os nosso serviços novos.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={Avatar} style={styles.userOrServc} />
                        <Text style={styles.notificationTxt}>Confira os preços do Alpha Projetos.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificateNews}>
                        <Image source={logo} style={styles.servcImgNotf} />
                        <Text style={styles.notificationTxt}>Confira os nosso serviços novos.</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )
}