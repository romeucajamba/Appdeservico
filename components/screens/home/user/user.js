import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AvatarUser from '../../../img/avatar/Emoji.png';
import styles from "./styles";


export default function ProfileUser({ navigation }) {

    function chat() {
        navigation.navigate('Chat')
    }
    function settingsProfile() {
        navigation.navigate('SettingsProfile')
    }
    function favorite(){
        navigation.navigate('Favoritos')
    }
    return (
        <View style={styles.container}>
            <View style={styles.userInforfamtion}>

                <View style={styles.userPhoto}>

                    <TouchableOpacity>
                        <Image
                            source={AvatarUser} style={styles.photo} />
                    </TouchableOpacity>

                </View>
                <View style={styles.userData}>
                    <Text style={styles.name}>Romeu Cajamba</Text>
                    <Text style={styles.dateIformation}>Utilizador desde</Text>
                    <Text style={styles.date}>10/02/2023</Text>
                </View>

            </View>
            <View style={styles.userSettings}>

                <TouchableOpacity style={styles.button}>
                    <Feather name="arrow-up" size={22} color='#12B3BD' />
                    <Text style={styles.texticon}>Tornar-se anuciante</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={chat}>
                    <Ionicons name="chatbox-sharp" size={22} color='#12B3BD' />
                    <Text style={styles.texticon}>chat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={settingsProfile}>
                    <Ionicons name="person-circle-outline" size={22} color='#12B3BD' />
                    <Text style={styles.texticon}>Definições de perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={favorite}>
                    <Ionicons name="star" size={22} color='#12B3BD' />
                    <Text style={styles.texticon}>Favoritos</Text>
                </TouchableOpacity>

            </View>

        </View>
    )

}