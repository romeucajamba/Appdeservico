import React from "react";
import { Image, View, ScrollView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import map from '../details/health/img/map/map.png';
import styles from './styles';

export default function Map() {

    return (
        <ScrollView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.searchBar}>
                <Feather name="search" size={20} color="#fff" style={styles.search} />
                <TextInput style={styles.searchInput} placeholder="O que está procurando?" />
            </View>
            <View style={styles.map}>

                <Image source={map} style={styles.coverMap} />
            </View>

        </ScrollView>
    )
}
