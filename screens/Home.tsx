import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationParams } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { updateData } from "../redux/weatherSlice";
import { getWeatherDataThunk } from "../redux/reduxThunk";
import { AppDispatch } from "../redux/store";

type THomeProps = NativeStackScreenProps<StackNavigationParams, "home">;

export default function Home({ navigation }: THomeProps) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch<AppDispatch>();
  console.log("redux thunk data hh", state);
  useEffect(() => {
    dispatch(getWeatherDataThunk());
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("details")}>
        <Text>More Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch(updateData({ isLoading: true }))}
      >
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
}
