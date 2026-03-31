import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "./button";
import { useRouter } from "expo-router";

export default function Hero() {
    const router = useRouter();
    

    return (
        <View style={styles.hero}>
            <Text style={styles.title}>Welcome to Preppi!</Text>
            <Text style={styles.paragraph}>Today for dinner lets eat: </Text>
            <Button onPress={() => router.push("/auth/recipe")} buttonStyle='btn--outline' buttonSize='btn--large'>I'm thinking of something else</Button>
            </View>

    );
}