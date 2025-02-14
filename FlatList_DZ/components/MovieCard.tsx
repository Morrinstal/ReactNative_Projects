import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type MovieCardType = {
    title: string,
    year: string,
    image: string
}

const MovieCard = ({title, year, image}: MovieCardType):React.ReactElement => {
    return(
    <View style={styles.card}>
        <Image source={{uri: image}} style={styles.image}/>
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.year}>{year}</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    card: {
      flexDirection: "row",
      alignItems: "center",
      padding: 12,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: "#444",
      backgroundColor: "#2a2a2a",
      borderRadius: 10,
    },
    image: { 
        width: 60, 
        height: 60, 
        borderRadius: 5, 
        marginRight: 12
    },
    title: { 
        fontSize: 16, 
        fontWeight: "bold", 
        color: "#fff" 
    },
    year: { 
        fontSize: 14, 
        color: "#bbb" 
    }
});

export default MovieCard;