import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Avatar from '../../../../../img/avatar/avatar.png';
import Produto from '../../../../../img/produtos/produto.jpeg';
import styles from "./styles";


export default function ClientMessage() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userInformation}>
                    <Image source={Avatar} style={styles.angUser} />
                    <Text style={styles.title}>Angostinho Vontade</Text>
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
                        <Image source={Produto} style={{ width: 40, height: 90 }} />
                        <View style={{ flexDirection: 'column', marginLeft: 6, }}>
                            <Text style={{ color: '#12B3BD', fontWeight: 'bold' }}>Interessado no seu produto.</Text>
                            <Text style={{ color: '#12B3BD', fontWeight: 'bold' }}>Livros escolares</Text>
                            <Text style={{ color: '#12B3BD', fontWeight: 'bold' }}>10.000.00 kz</Text>
                        </View>
                    </View>

                    <View style={styles.messagemBox}>
                        <Text style={styles.subjt}>O local é ótimo, nem imaginas as pessoas.</Text>
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