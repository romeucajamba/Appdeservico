import React from "react";
import { View, ScrollView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

import styles from './styles';

export default function Map() {

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <View style={styles.searchBar}>
                <TextInput style={styles.searchInput} placeholder="O que está procurando?" />
                <Feather name="search" size={20} color="#fff" style={styles.search} />
            </View>

            <ScrollView>

                <View style={styles.map}>
                </View>

            </ScrollView>
        </View>
    )
}
