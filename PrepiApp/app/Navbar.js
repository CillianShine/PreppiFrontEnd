import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Button } from "./button";

export default function Navbar() {
  const router = useRouter();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    const screenwidth = Dimensions.get("window").width;
    if (screenwidth <= 960) {
      setButton(false);
     } else {
      setButton(true);
     }
    };

    useEffect(() => {
      showButton();
      const subscription = Dimensions.addEventListener("change", showButton);
      return () => subscription?.remove();

    }, []);

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.logo}>
          Preppi <Ionicons name="rocket" size={16} />
        </Text>
      </TouchableOpacity>
    
      <TouchableOpacity onPress={handleClick}>
        <Ionicons name={click ? "close" : "menu"} size={24} />
      </TouchableOpacity>

      {click && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => { router.push("/"); closeMobileMenu(); }}>
            <Text style={styles.menuItem}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { router.push("/scanner"); closeMobileMenu(); }}>
            <Text style={styles.menuItem}>Scanner</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { router.push("/pantry"); closeMobileMenu(); }}>
            <Text style={styles.menuItem}>My Pantry</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { router.push("/profile"); closeMobileMenu(); }}>
            <Text style={styles.menuItem}>My Profile</Text>
          </TouchableOpacity>
          {button && <Button onPress={() => router.push("/signup")} buttonStyle='btn--outline'>SIGN UP</Button>}
        </View>
      )}
    </View>
  );
}

// export function NavbarContainer() {
//   return (
//     <View style={styles.container}>
//       <Navbar />
//       <Text style={styles.title}></Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 70,
    backgroundColor: "rgb(20, 107, 201)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  logo: { fontSize: 20, fontWeight: "bold" },
  menu: { position: "absolute", top: 60, left: 0, right: 0, backgroundColor: "#fff", padding: 16 },
  menuItem: { fontSize: 18, paddingVertical: 8 },
});


