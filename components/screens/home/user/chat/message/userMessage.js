import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import logo from '../../../../../img/AngV.png';
import styles from "./styles";


export default function UserMessage() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userInformation}>
                    <Image source={logo} style={styles.angUser} />
                    <Text style={styles.title}>AngoVerso</Text>
                </View>
                <TouchableOpacity style={styles.optionButton}>
                    <Ionicons name="md-options" size={30} style={styles.options} />
                </TouchableOpacity>
            </View>



            <View style={styles.messageArea}>
                <ScrollView>

                    <View style={styles.messagemBox}>
                        <Text style={styles.subjt}>Gostei muito dos serviços.</Text>
                    </View>

                    <View style={styles.messagemBoxClient}>
                        <Text style={styles.subjtClient}>O local é ótimo, nem imaginas as pessoas.</Text>
                    </View>

                    <View style={styles.messagemBox}>
                        <Text style={styles.subjt}>Equipamentos adequados para o serviço.</Text>
                    </View>

                    <View style={styles.messagemBoxClient}>
                        <Text style={styles.subjtClient}>O local é ótimo, nem imaginas as pessoas.</Text>
                    </View>

                    <View style={styles.messagemBox}>
                        <Text style={styles.subjt}>O atendimento é ótimo.</Text>
                    </View>

                    <View style={styles.messagemBoxClient}>
                        <Text style={styles.subjtClient}>O local é ótimo, nem imaginas as pessoas.</Text>
                    </View>

                    <View style={styles.messagemBox}>
                        <Text style={styles.subjt}>São muito atenciosos.</Text>
                    </View>

                    <View style={styles.messagemBoxClient}>
                        <Text style={styles.subjtClient}>O local é ótimo, nem imaginas as pessoas.</Text>
                    </View>

                    <View style={styles.messagemBox}>
                        <Text style={styles.subjt}>O local é ótimo, nem imaginas as pessoas.</Text>
                    </View>

                    <View style={styles.messagemBoxClient}>
                        <Text style={styles.subjtClient}>O local é ótimo, nem imaginas as pessoas.</Text>
                    </View>

                    <View style={styles.messagemBox}>
                        <Text style={styles.subjt}>Proposta</Text>
                        <Text style={styles.subjt}>Anúncio</Text>
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>_________________________</Text>
                        <Text style={styles.subjt}>Nome do anúncio</Text>
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>_________________________</Text>
                        <Text style={styles.subjt}>Nome do anúncio</Text>
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>_________________________</Text>
                        <Text style={styles.subjt}>Detahles</Text>
                    </View>

                    <View style={styles.messagemBoxClient}>
                        <Text style={styles.subjtClient}>O local é ótimo, nem imaginas as pessoas.</Text>
                    </View>

                    <View style={styles.messagemBox}>
                        <Text style={styles.subjt}>O local é ótimo, nem imaginas as pessoas.</Text>
                    </View>
                </ScrollView>

            </View>


            <View style={styles.messageInputArea}>
                <TextInput placeholder="Messagem" style={styles.input} />
                <TouchableOpacity style={styles.buttonSend}>
                    <Ionicons name="send" size={30} style={styles.send} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonMoreRigth}>
                <Feather name="arrow-down-circle" size={30} color="#12B3BD" />
            </TouchableOpacity>
        </View>
    )
}