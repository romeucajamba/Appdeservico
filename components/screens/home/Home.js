import React from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import emerg from './details/health/img/hospitals/emerg.webp';
import americo from './details/health/img/hospitals/americo.webp';
import cefas from './details/health/img/hospitals/cefas.webp';
import farm from './details/health/img/farmacy/farm.webp'


function Home({ navigation }) {


    function lucreciaScreen() {
        navigation.navigate('Lucrecia');
    }

    function goToMenu() {
        navigation.navigate('Menu');
    }

    function notifications() {
        navigation.navigate('Notificações');
    }

    function perfilUser() {
        navigation.navigate('Perfil');
    }

    return (
        <View style={styles.container}>

            <StatusBar style="light" />
            <View style={styles.header}>
                <Text style={styles.title}>AngoVerso</Text>

                <TouchableOpacity onPress={perfilUser} style={styles.userCount}>
                    <Ionicons name="person-sharp" size={20} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity onPress={notifications} style={styles.touchIcon}>
                    <Feather name="bell" size={20} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menu} onPress={goToMenu}>
                    <Feather name="menu" size={24} color="#fff" />
                </TouchableOpacity>

            </View>

            <View style={styles.searchBar}>

                <TextInput style={styles.searchInput} placeholder="O que está procurando?" />
                <Feather name="search" size={20} color="#fff" style={styles.search} />
            </View>

            <ScrollView>

                <View style={styles.serviceConteiner}>

                    <View style={styles.containerTitle}>
                        <Text style={styles.serviceTitle}>Hospitais</Text>
                        <Ionicons name="body" size={20} color="#fff" />
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                        <View style={styles.serviceArea}>
                            <Image
                                source={emerg}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                            <TouchableOpacity style={styles.footer} onPress={lucreciaScreen}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={americo}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Américo boa vida</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={cefas}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Cefas</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={farm}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Luisa Nguizany</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                </View>

                <View style={styles.serviceConteiner}>

                    <View style={styles.containerTitle}>
                        <Text style={styles.serviceTitle}>Escolas</Text>
                        <Ionicons name="bus" size={20} color="#fff" />

                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                        <View style={styles.serviceArea}>
                            <Image
                                source={emerg}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                            <TouchableOpacity style={styles.footer} onPress={lucreciaScreen}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={americo}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Américo boa vida</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={cefas}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Cefas</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={farm}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Luisa Nguizany</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                </View>

                <View style={styles.serviceConteiner}>

                    <View style={styles.containerTitle}>
                        <Text style={styles.serviceTitle}>Universidades & faculdades</Text>
                        <Feather name="book" size={20} color="#fff" />
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                        <View style={styles.serviceArea}>
                            <Image
                                source={emerg}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                            <TouchableOpacity style={styles.footer} onPress={lucreciaScreen}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={americo}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Américo boa vida</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={cefas}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Cefas</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={farm}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Luisa Nguizany</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                </View>

                <View style={styles.serviceConteiner}>

                    <View style={styles.containerTitle}>
                        <Text style={styles.serviceTitle}>Hoteis</Text>
                        <Ionicons name="home-outline" size={20} color="#fff" />
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                        <View style={styles.serviceArea}>
                            <Image
                                source={emerg}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                            <TouchableOpacity style={styles.footer} onPress={lucreciaScreen}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={americo}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Américo boa vida</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={cefas}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Cefas</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={farm}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Luisa Nguizany</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                </View>

                <View style={styles.serviceConteiner}>

                    <View style={styles.containerTitle}>
                        <Text style={styles.serviceTitle}>Crêches & Jardís de infâncias</Text>
                        <Ionicons name="book" size={20} color="#fff" />
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                        <View style={styles.serviceArea}>
                            <Image
                                source={emerg}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                            <TouchableOpacity style={styles.footer} onPress={lucreciaScreen}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={americo}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Américo boa vida</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={cefas}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Cefas</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={farm}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Luisa Nguizany</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                </View>

                <View style={styles.serviceConteiner}>

                    <View style={styles.containerTitle}>
                        <Text style={styles.serviceTitle}>Hopedarias</Text>
                        <Ionicons name="home" size={20} color="#fff" />
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                        <View style={styles.serviceArea}>
                            <Image
                                source={emerg}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                            <TouchableOpacity style={styles.footer} onPress={lucreciaScreen}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={americo}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Américo boa vida</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={cefas}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Cefas</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={farm}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Luisa Nguizany</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                </View>

                <View style={styles.serviceConteiner}>

                    <View style={styles.containerTitle}>
                        <Text style={styles.serviceTitle}>Prestações de serviços</Text>
                        <Ionicons name="build" size={20} color="#fff" />
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                        <View style={styles.serviceArea}>
                            <Image
                                source={emerg}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Festas</Text>
                            <TouchableOpacity style={styles.footer} onPress={lucreciaScreen}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={americo}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Canalização</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={cefas}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Pintor</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={farm}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Babás</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                </View>

                <View style={styles.serviceConteiner}>

                    <View style={styles.containerTitle}>
                        <Text style={styles.serviceTitle}>Lojas mobiliárias & electdomésticos</Text>
                        <Ionicons name="cash" size={19} color="#fff" />
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                        <View style={styles.serviceArea}>
                            <Image
                                source={emerg}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                            <TouchableOpacity style={styles.footer} onPress={lucreciaScreen}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={americo}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Américo boa vida</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={cefas}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Cefas</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serviceAreaRight}>
                            <Image
                                source={farm}
                                style={styles.cover}
                            />
                            <Text style={styles.companyTitle}>Luisa Nguizany</Text>
                            <TouchableOpacity style={styles.footer}>
                                <Text style={styles.detail}>Saber mais</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                </View>

            </ScrollView >

            <TouchableOpacity onPress={goToMenu} style={styles.buttonMoreRigth}>
                <Ionicons name="add-circle" size={45} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

export default Home;