import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Pediatria from '../../../img/hospitals/crianca.jpg';
import RaioX from '../../../img/hospitals/raiox.jpg';
import Cirugia from '../../../img/hospitals/cirugia.webp';
import Cama from '../../../img/hospitals/cama.webp';
import Enfermeira from '../../../img/hospitals/enfermeira.webp';
import Analise from '../../../img/hospitals/gota.jpg';

import styles from './styles';

export default function Servicos() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Serviços, preços e reserva"
                        style={styles.searchInput}
                    />
                    <Feather name="search" size={20} color="#fff" style={styles.search} />
                </View>
                <View style={styles.categorty}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.buttomCategory}>
                            <Text style={styles.categotegoryText}>Ver todos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttomCategory}>
                            <Text style={styles.categotegoryText}>Preços</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttomCategory}>
                            <Text style={styles.categotegoryText}>Consulta</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttomCategory}>
                            <Text style={styles.categotegoryText}>Marcação</Text>
                        </TouchableOpacity>
                    </ScrollView>

                </View>
            </View>
            <View style={styles.servicesArea}>
                <ScrollView>
                    <View>
                        <View style={styles.requestAndInformation}>
                            <Image source={Pediatria} style={styles.serviceImage} />
                            <View style={styles.request}>
                                <Text style={styles.text}>Pediatria</Text>
                                <TouchableOpacity style={styles.buttomIformations}>
                                    <Text style={styles.informations}>Mais informações</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.favIcon}>
                                <Ionicons name="heart" size={20} color="red" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.requestAndInformation}>
                            <Image source={RaioX} style={styles.serviceImage} />
                            <View style={styles.request}>
                                <Text style={styles.text}>RaioX</Text>
                                <TouchableOpacity style={styles.buttomIformations}>
                                    <Text style={styles.informations}>Mais informações</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.favIcon}>
                                <Ionicons name="heart" size={20} color="red" />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.requestAndInformation}>
                            <Image source={Cirugia} style={styles.serviceImage} />
                            <View style={styles.request}>
                                <Text style={styles.text}>Cirugia</Text>
                                <TouchableOpacity style={styles.buttomIformations}>
                                    <Text style={styles.informations}>Mais informações</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.favIcon}>
                                <Ionicons name="heart" size={20} color="red" />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.requestAndInformation}>
                            <Image source={Cama} style={styles.serviceImage} />
                            <View style={styles.request}>
                                <Text style={styles.text}>Vidal & G.Especie</Text>
                                <TouchableOpacity style={styles.buttomIformations}>
                                    <Text style={styles.informations}>Mais informações</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.favIcon}>
                                <Ionicons name="heart" size={20} color="red" />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.requestAndInformation}>
                            <Image source={Enfermeira} style={styles.serviceImage} />
                            <View style={styles.request}>
                                <Text style={styles.text}>Enfermeira particular</Text>
                                <TouchableOpacity style={styles.buttomIformations}>
                                    <Text style={styles.informations}>Mais informaçoes</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.favIcon}>
                                <Ionicons name="heart" size={20} color="red" />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.requestAndInformation}>
                            <Image source={Analise} style={styles.serviceImage} />
                            <View style={styles.request}>
                                <Text style={styles.text}>Todo tipo de análise</Text>
                                <TouchableOpacity style={styles.buttomIformations}>
                                    <Text style={styles.informations}>Mais informações</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.favIcon}>
                                <Ionicons name="heart" size={20} color="red" />
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.buttonMoreRigth}>
                <Ionicons name="chatbubbles-sharp" size={45} color="#12B3BD" />
            </TouchableOpacity>
        </View>

    )

}