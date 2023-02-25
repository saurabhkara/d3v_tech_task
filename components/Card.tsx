import { View, Text, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../helper/colors";

export default function Card() {
  return (
    <View style={styles.cardContainer}>
        <Text style={{textAlign:'center'}}>25 Feb </Text>
      <View style={styles.card}>
        <Text>Card</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height:'95%'
  },
  card: {
    height: 200,
    width: 135,
    backgroundColor: COLORS.lightPrimary,
    borderRadius:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    margin: 5,
    elevation: 4,
  },
});
