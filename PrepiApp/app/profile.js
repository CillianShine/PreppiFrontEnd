import React, { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";




export default function Profile() {
  const [username, setUsername] = useState("grug");
  const router = useRouter();

  const handleLogout = () => {

    router.push('/login'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username}</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}