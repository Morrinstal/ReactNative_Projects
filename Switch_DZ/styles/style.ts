import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    headerText: {
      fontSize: 24,
      fontWeight: "bold",
    },
    switchContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    cardWrapper: {
      paddingBottom: 20,
    },
    card: {
      borderRadius: 10,
      padding: 15,
      flexDirection: "row",
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
      marginBottom: 15,
    },
    cardImage: {
      width: 100,
      height: 140,
      borderRadius: 10,
      marginRight: 15,
    },
    cardDetails: {
      justifyContent: "center",
      flex: 1,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    cardDescription: {
      fontSize: 14,
      lineHeight: 18,
      overflow: "hidden",
    },
  });
  
export default styles;