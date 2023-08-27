import React from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, Share } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import emerg from './details/health/img/hospitals/emerg.webp';
import americo from './details/health/img/hospitals/americo.webp';
import cefas from './details/health/img/hospitals/cefas.webp';
import farm from './details/health/img/farmacy/farm.webp'
import farma from './details/health/img/farmacy/farma.webp';




function Home({ navigation }) {

    function loginScreen() {
        navigation.navigate('Bem-vindo de volta!');
    }

    function lucreciaScreen() {
        navigation.navigate('Lucrecia');
    }

    function goToMenu() {
        navigation.navigate('Menu');
    }

    function notifications() {
        navigation.navigate('NotificaCões');
    }

    const onShare = async () => {
        const shareApp = await Share.share({
            message: "Na AngoVerso encontras tudo que você quiser, desde empresas a restaurantes, escolas, mercados e muito mais."
        })
    }

    return (
        < ScrollView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.header}>

                <Text style={styles.title}>AngoVerso</Text>

                <TouchableOpacity onPress={onShare} style={styles.touchIcon}>
                    <Feather name="share" size={20} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={notifications} style={styles.touchIcon}>
                    <Feather name="bell" size={20} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menu} onPress={goToMenu}>
                    <Feather name="menu" size={24} color="#fff" />
                </TouchableOpacity>

            </View>
            <View style={styles.searchBar}>
                <Feather name="search" size={20} color="#fff" style={styles.search} />
                <TextInput style={styles.searchInput} placeholder="O que está procurando?" />
            </View>

            <View style={styles.titleServices}>
                <Text style={styles.serviceTitle}>Hospitais</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.serviceConteinaer}>
                <View styles={styles.serviceArea}>
                    <Image
                        source={emerg}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                    <TouchableOpacity style={styles.footer} onPress={lucreciaScreen}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>
                <View styles={styles.serviceAreaRight} style={{ marginLeft: 20 }}>
                    <Image
                        source={americo}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Américo boa vida</Text>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>
                <View styles={styles.serviceAreaRight} style={{ marginLeft: 20 }}>
                    <Image
                        source={cefas}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Cefas</Text>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>
                <View styles={styles.serviceAreaRight} style={{ marginLeft: 20 }}>
                    <Image
                        source={farm}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Luisa Nguizany</Text>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>
                <View styles={styles.serviceAreaRight} style={{ marginLeft: 20 }}>
                    <Image
                        source={emerg}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={styles.titleServicesFarm}>
                <Text style={styles.farmTitle}>Farmácia</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.serviceFarm}>
                <View styles={styles.serviceArea}>
                    <Image
                        source={farm}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Luíz Nguizany</Text>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>
                <View styles={styles.serviceAreaRight} style={{ marginLeft: 20 }}>
                    <Image
                        source={farma}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Saúde alpha</Text>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>
                <View styles={styles.serviceAreaRight} style={{ marginLeft: 20 }}>
                    <Image
                        source={emerg}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>
                <View styles={styles.serviceAreaRight} style={{ marginLeft: 20 }}>
                    <Image
                        source={emerg}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>
                <View styles={styles.serviceAreaRight} style={{ marginLeft: 20 }}>
                    <Image
                        source={emerg}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <View style={styles.titleServiceSchool}>
                <Text style={styles.farmTitle}>Escola</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesSchool}>
                <View styles={styles.serviceArea}>
                    <Image
                        source={emerg}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>
                <View styles={styles.serviceAreaRight} style={{ marginLeft: 20 }}>
                    <Image
                        source={emerg}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>
                <View styles={styles.serviceAreaRight} style={{ marginLeft: 20 }}>
                    <Image
                        source={emerg}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>
                <View styles={styles.serviceAreaRight} style={{ marginLeft: 20 }}>
                    <Image
                        source={emerg}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>
                <View styles={styles.serviceAreaRight} style={{ marginLeft: 20 }}>
                    <Image
                        source={emerg}
                        style={styles.cover}
                    />
                    <Text style={styles.companyTitle}>Lucrêcia Paín</Text>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.detail}>Saber mais</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <View style={styles.moreServices}>
                <TouchableOpacity style={styles.buttonMore} onPress={goToMenu}>
                    <Text style={styles.moreServicesText}>Mais serviços ao teu dispor</Text>
                    <Feather name="arrow-right" size={24} color="#fff" style={{ marginTop: 4 }} />
                </TouchableOpacity>
            </View>

            <View style={styles.barUser}>
                <TouchableOpacity onPress={loginScreen}>
                    <Feather name="log-out" size={30} style={styles.icon} />
                </TouchableOpacity>

            </View>
        </ScrollView >
    )
}

export default Home;