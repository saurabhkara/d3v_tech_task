import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationParams } from "../App";
import { getWeatherData } from "../helper/api";

type THomeProps = NativeStackScreenProps<StackNavigationParams, "home">;

export default function Home({ navigation }: THomeProps) {
  useEffect(() => {
    getWeatherData('delhi');
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("details")}>
        <Text>More Details</Text>
      </TouchableOpacity>
    </View>
  );
}
