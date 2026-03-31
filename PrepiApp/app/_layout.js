import { Stack } from 'expo-router';
import {View, StyleSheet} from 'react-native';
import Navbar from './Navbar';


export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Stack screenOptions={{headerShown: false}} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
}});