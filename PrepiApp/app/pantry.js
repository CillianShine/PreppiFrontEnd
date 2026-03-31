import React from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function Pantry() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Pantry</Text>
            <Text style={styles.subtitle}>Your saved ingredients will appear here.</Text>
        </View>
    );
}


