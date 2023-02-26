import { View, Text, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../helper/colors";
import { List } from "../model/types";

interface ICardProp{
    item:List
}

export default function DayCard({item}:ICardProp) {
    const {main,dt_txt, weather } = item
  return (
    <View style={styles.card}>
      <Text style={[styles.text,{width:'35%'}]}>{dt_txt.split(" ")[0]}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "20%",
        }}
      >
        <Text style={styles.text}>{main.temp_min.toFixed()}</Text>
        <Text style={styles.text}>{main.temp_max.toFixed()}</Text>
      </View>
      <Text style={[styles.text,{width:'40%',textAlign:'right'}]}>{weather[0].description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 50,
    backgroundColor: COLORS.secondaryDark,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop:10
  },
  text: {
    color: "white",
  },
});
