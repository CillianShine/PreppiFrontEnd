import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];
const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

export const Button = ({ 
    children,
    type, 
    onPress, 
    buttonStyle, 
    ButtonSize }) => {
        const router = useRouter();

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(ButtonSize) ? ButtonSize : SIZES[0];

    return (
        <TouchableOpacity
            style={[styles.button, styles[checkButtonStyle], styles[checkButtonSize]]}
            onPress={onPress? onPress : () => router.push("/signup")}
        >
        <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
        );
};
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  'btn--primary': {
    backgroundColor: "#1470c9",
  },
  'btn--outline': {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
  },
  'btn--test': {
    backgroundColor: "orange",
  },
  'btn--medium': {
    paddingHorizontal: 20,
  },
  'btn--large': {
    paddingHorizontal: 30,
  },
  'btn--mobile': {
    width: "100%",
  },
  'btn--wide': {
    width: "100%",
    paddingHorizontal: 30,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

