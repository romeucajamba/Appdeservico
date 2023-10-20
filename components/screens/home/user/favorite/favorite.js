import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Comp from '../../../../img/produtos/pc.jpeg';
import Pc from '../../../../img/produtos/macB.jpeg';
import Pele from '../../../../img/produtos/pele.jpeg';
import Iphone from '../../../../img/produtos/telf.jpeg';



export default function Favorite() {
    return (
        <View style={styles.container}>

            <View style={styles.favoriteSuperArea}>

                <ScrollView>
                    <View style={styles.favoriteArea}>
                        <Image
                            source={Comp}
                            style={styles.cover}
                        />
                        <Text style={styles.objectname}>Computador Portátil</Text>
                        <Text style={styles.detail}>Computador portátil, vendido pelo tecnologSystem.
                            Especificações: 10 geração, Corei 7, Ram 32Gb, Gráfica da NgideaGeForce, SSD de 1Tb</Text>
                        <Text style={styles.price}>450.000.00 Kz</Text>
                        <Text style={styles.localization}>Luanda</Text>
                        <Ionicons name="heart" size={20} color="red" style={styles.heart} />
                        <TouchableOpacity style={styles.delete}>
                            <Text style={styles.textDelete}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.favoriteArea}>
                        <Image
                            source={Pc}
                            style={styles.cover}
                        />
                        <Text style={styles.objectname}>MackBook</Text>
                        <Text style={styles.detail}>Computador portátil, vendido pelo tecnologSystem.
                            Especificações: 10 geração, Ram 12Gb, Gráfica da NgideaGeForce, SSD de 800Gb</Text>
                        <Text style={styles.price}>300.000.00 Kz</Text>
                        <Text style={styles.localization}>Bengo</Text>
                        <Ionicons name="heart" size={20} color="red" style={styles.heart} />
                        <TouchableOpacity style={styles.delete}>
                            <Text style={styles.textDelete}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.favoriteArea}>
                        <Image
                            source={Pele}
                            style={styles.cover}
                        />
                        <Text style={styles.objectname}>Produtos Para a pele</Text>
                        <Text style={styles.detail}>Computador portátil, vendido pelo tecnologSystem.
                            Especificações: 10 geração, Corei 7, Ram 32Gb, Gráfica da NgideaGeForce, SSD de 1Tb</Text>
                        <Text style={styles.price}>50.000.00 Kz</Text>
                        <Text style={styles.localization}>Huambo</Text>
                        <Ionicons name="heart" size={20} color="red" style={styles.heart} />
                        <TouchableOpacity style={styles.delete}>
                            <Text style={styles.textDelete}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.favoriteArea}>
                        <Image
                            source={Iphone}
                            style={styles.cover}
                        />
                        <Text style={styles.objectname}>Iphone 14</Text>
                        <Text style={styles.detail}>Computador portátil, vendido pelo tecnologSystem.
                            Com todos os acessórios</Text>
                        <Text style={styles.price}>500.000.00 Kz</Text>
                        <Text style={styles.localization}>Luanda</Text>
                        <Ionicons name="heart" size={20} color="red" style={styles.heart} />
                        <TouchableOpacity style={styles.delete}>
                            <Text style={styles.textDelete}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>

        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#0E0C16',
        },
        favoriteSuperArea: {
            width: '100%',
            height: '100%',
            backgroundColor: '#0E0C16',
            flexDirection: 'column',
        },
        favoriteArea: {
            height: '100%',
            height: 285,
            backgroundColor: '#D9D9D9',
            marginLeft: 2,
            borderRadius: 5,
            padding: 5,
            marginTop: 20,
        },
        cover: {
            width: 350,
            height: 110,
            borderRadius: 10,
            marginBottom: 5,
        },
        objectname: {
            marginLeft: 5,
            marginBottom: 8,
            fontSize: 15,
            fontWeight: 'bold',
            color: '#0E0C16',
            marginTop: 4,
        },
        detail: {
            fontSize: 13,
            fontWeight: 'bold',
            marginLeft: 4,
            color: '#0E0C1',
            textTransform: 'capitalize',
            marginTop: 4,
        },
        price: {
            fontSize: 11,
            fontWeight: 'bold',
            marginLeft: 4,
            color: '#0E0C16',
            textTransform: 'capitalize',
            marginTop: 4,
        },
        heart: {
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 4,
            marginLeft: 300,
        },
        localization: {
            color: '#12B3BD',
            marginTop: 6,
        },
        delete: {
            backgroundColor: '#12B3BD',
            width: '20%',
            height: 25,
            borderRadius: 5,
            marginLeft: 250,
            marginTop: 4,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 3,
        },
        textDelete: {
            color: '#fff',
        },
    }
)