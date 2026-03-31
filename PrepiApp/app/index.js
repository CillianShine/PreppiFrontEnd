import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useAudioPlayer } from 'expo-audio';
// import {heroStyles as styles} from './HeroStyles';

const audioSource = require('./(auth)/audio/beep-07a.mp3');
  
 

export default function Home() {
  const router = useRouter();
  const player = useAudioPlayer(audioSource);
   const recipe_nav=()=>{
    router.push({
      pathname:'/recipe',
      params:{
        items:JSON.stringify(items),
      },
    });
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Preppi!</Text>
      <Text style={styles.subtitle}>Today for dinner, let's eat:</Text>
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
     flex: 1,
    backgroundColor: "rgb(20, 107, 201)", 
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 70,
  },
  title: {

    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#fff",
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
  }

});



