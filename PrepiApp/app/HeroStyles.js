import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
/* .hero-container {
    background: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
} */

container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(20, 107, 201)',
    paddingTop: 70, // if navbar is absolute
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginTop: 20,
  },
});