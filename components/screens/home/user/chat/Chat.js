import React from "react";
import { View, TextInput, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import logo from '../../../../img/AngV.png';
import Avatar from '../../../../img/avatar/avatar.png';
import Emoji from '../../../../img/avatar/Emoji.png';
import styles from "./styles";


export default function Chat({ navigation }) {

    function messageUser() {
        navigation.navigate('UserMessage')
    }
    function clientMassage() {
        navigation.navigate('ClientMessage')
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput style={styles.searchInput} placeholder="O que está procurando?" />
            </View>

            <View style={styles.userMessagearea}>
                <ScrollView>
                    <View style={styles.userArea}>

                        <Image source={logo} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={Avatar} style={styles.userPhoto} />

                        <TouchableOpacity onPress={clientMassage} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Agostinho Vontade</Text>
                            <Text style={styles.messagem}>Particular</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={Emoji} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Dalva Esperança</Text>
                            <Text style={styles.messagem}>Empresa</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={Avatar} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>Um novo cliente viu os seus produtos...</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.userArea}>

                        <Image source={logo} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>As suas visualizações têm aumentado.</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={Avatar} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={Emoji} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={logo} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={Avatar} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={Emoji} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={logo} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={Avatar} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={Emoji} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={logo} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={Avatar} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={Emoji} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={logo} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={Avatar} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userArea}>

                        <Image source={Emoji} style={styles.userPhoto} />

                        <TouchableOpacity onPress={messageUser} style={styles.messageDeatilsArea}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Suport</Text>
                            <Text style={styles.messagem}>A sua empresa já foi totalmente registada...</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}