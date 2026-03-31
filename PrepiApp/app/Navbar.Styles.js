import { StyleSheet } from "react-native";

export const navbarStyles = StyleSheet.create({
  navbar: {
    width: "100%",
    height: 70,
    backgroundColor: "#1c1b1b", 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  menu: {
    flexDirection: "row", 
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10, 
  },
  menuItem: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  menuItemPressed: {
    backgroundColor: "#1888ff",
    borderRadius: 4,
  },
  mobileMenu: {
    position: "absolute",
    top: 70, 
    left: 0,
    right: 0,
    backgroundColor: "#1c1b1b",
    padding: 16,
  },
  mobileMenuItem: {
    color: "#fff",
    fontSize: 18,
    paddingVertical: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});