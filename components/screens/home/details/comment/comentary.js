import { ScrollView, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Stars from 'react-native-stars';
import Avatar from '../../../../img/avatar/avatar.png';
import styles from "./styles";

export default function Comment({ navigation }) {

    function goback() {
        navigation.navigate('Lucrecia');
    }
    return (
        <View style={styles.content}>

            <View style={styles.header}>

                <View style={styles.iconBack}>
                    <TouchableOpacity onPress={goback}>
                        <Feather name="arrow-left" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={styles.avaliationsStars}>

                    <Text style={styles.textAvaliations}>Avaliação</Text>
                    <Stars
                        default={4}
                        count={5}
                        half={true}
                        starSize={20}
                        fullStar={<Ionicons name="md-star" size={20} style={styles.stars} />}
                        empyStar={<Ionicons name="md-star-outline" size={20} style={styles.stars} />}
                        halfStar={<Ionicons name="md-star-half" size={20} style={styles.stars} />}
                    />
                </View>

            </View>

            <ScrollView>
                <View style={styles.backGround}>

                    <View style={styles.comentaryArea}>
                        <View style={styles.user}>
                            <Image source={Avatar} style={styles.avatar} />
                            <Text style={styles.nameUser}>Osvaldo Muafima</Text>
                        </View>

                        <View style={styles.commentUser}>
                            <Text style={styles.subjt}>Gostei muito dos serviços.</Text>
                        </View>

                    </View>

                    <View style={styles.comentaryArea}>
                        <View style={styles.user}>
                            <Image source={Avatar} style={styles.avatar} />
                            <Text style={styles.nameUser}>Romeu Cajamba</Text>
                        </View>

                        <View style={styles.commentUser}>
                            <Text style={styles.subjt}>Equipamentos adequados para o serviço.</Text>
                        </View>

                    </View>

                    <View style={styles.comentaryArea}>
                        <View style={styles.user}>
                            <Image source={Avatar} style={styles.avatar} />
                            <Text style={styles.nameUser}>Sr Elsha Destino</Text>
                        </View>

                        <View style={styles.commentUser}>
                            <Text style={styles.subjt}>O atendimento é ótimo.</Text>
                        </View>

                    </View>

                    <View style={styles.comentaryArea}>
                        <View style={styles.user}>
                            <Image source={Avatar} style={styles.avatar} />
                            <Text style={styles.nameUser}>Antônio Bumba</Text>
                        </View>

                        <View style={styles.commentUser}>
                            <Text style={styles.subjt}>São muito atenciosos.</Text>
                        </View>
                    </View>

                    <View style={styles.comentaryArea}>
                        <View style={styles.user}>
                            <Image source={Avatar} style={styles.avatar} />
                            <Text style={styles.nameUser}>Lourenço Cardoso</Text>
                        </View>

                        <View style={styles.commentUser}>
                            <Text style={styles.subjt}>O local é ótimo, nem imaginas as pessoas.</Text>
                        </View>
                    </View>

                    <View style={styles.comentaryArea}>
                        <View style={styles.user}>
                            <Image source={Avatar} style={styles.avatar} />
                            <Text style={styles.nameUser}>Filipa Cardoso</Text>
                        </View>

                        <View style={styles.commentUser}>
                            <Text style={styles.subjt}>O local é ótimo, nem imaginas as pessoas.</Text>
                        </View>
                    </View>

                    <View style={styles.comentaryArea}>
                        <View style={styles.user}>
                            <Image source={Avatar} style={styles.avatar} />
                            <Text style={styles.nameUser}>Renato Simas</Text>
                        </View>

                        <View style={styles.commentUser}>
                            <Text style={styles.subjt}>O local é ótimo, nem imaginas as pessoas.</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>

            <View style={styles.commentPlace}>
                <Text style={styles.txtCommenty}>O que achou do serviço?</Text>

                <View style={styles.inputComentary}>
                    <TextInput placeholder="Escreve teu comentário" style={styles.input} />
                    <TouchableOpacity style={styles.buttonSend}>
                        <Ionicons name="send" size={30} style={styles.send} />
                    </TouchableOpacity>
                </View>
            </View>

        </View >
    )
}

