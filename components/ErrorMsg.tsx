import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface IErrorProp {
  onPress?: () => void;
}

export default function ErrorMsg({ onPress }: IErrorProp) {
  const { isError } = useSelector((state: RootState) => state.weather);
  return (
    <View style={{ flexDirection: "row" }}>
      <Text>{isError}</Text>
      <TouchableOpacity style={{ marginLeft: 10 }} onPress={onPress}>
        <Feather name="refresh-cw" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}
