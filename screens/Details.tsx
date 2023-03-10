import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationParams } from "../App";
import COLORS from "../helper/colors";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DayCard from "../components/DayCard";
import Loader from "../components/Loader";
import ErrorMsg from "../components/ErrorMsg";
import CityModal from "../components/CityModal";
import { getWeatherDataThunk } from "../redux/reduxThunk";

type TDetailsProps = NativeStackScreenProps<StackNavigationParams, "details">;

export default function Details({ navigation }: TDetailsProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [favCity, setFavCity] = useState<string>("");
  const [isVisiable, setIsVisiable] = useState(false);
  const [selectCity, setSelectCity] = useState<string>("");
  const {
    data: { city, list },
    isLoading,
    isError,
  } = useSelector((state: RootState) => state.weather);

  const onClose = () => {
    setIsVisiable(!isVisiable);
  };

  const onCity = (city: string) => {
    setSelectCity(city);
    setIsVisiable(false);
  };

  const addFavCity = async () => {
    try {
      await AsyncStorage.setItem("favCity", city.name);
      setFavCity(city.name);
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    async function setCity() {
      try {
        const det = {city:selectCity}
        dispatch(getWeatherDataThunk(det));
        // await AsyncStorage.setItem("city", selectCity);
      } catch (error) {
        console.log("Error occured in Async Storage");
      }
    }
    if (selectCity) {
      setCity();
    }
    async function getFavCity() {
      try {
        const favC = await AsyncStorage.getItem("favCity");
        if (favC) {
          setFavCity(favC);
        }
      } catch (error) {
        console.log("Error in async storage");
      }
    }
    getFavCity();
  }, [selectCity]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            onPress={() => navigation.navigate("home")}
          />
          <TouchableOpacity
            style={{
              // marginLeft: "30%",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
            onPress={() => setIsVisiable(!isVisiable)}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "600",
                marginRight: 15,
              }}
            >
              {city.name}
            </Text>
            <Entypo name="chevron-small-down" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={addFavCity}>
            {favCity === city.name ? (
              <MaterialIcons name="favorite" size={24} color="red" />
            ) : (
              <MaterialIcons name="favorite" size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: "10%", height: "25%" }}>
          <Text style={styles.text}>Your Favorite City</Text>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.secondaryDark,
              width: "100%",
              height: 50,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
            onPress={() => setSelectCity(favCity)}
          >
            <Text style={{ color: COLORS.white, fontSize: 18 }}>{favCity}</Text>
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <ErrorMsg onPress={() => console.log("working")} />
        ) : (
          <ScrollView>
            <Text style={{ color: "white", marginVertical: 20 }}>
              Upcoming Days
            </Text>
            {list.map((item, index) => {
              if (index % 8 === 0) {
                return <DayCard key={index} item={item} />;
              }
            })}
          </ScrollView>
        )}
      </View>
      <StatusBar barStyle={"dark-content"} backgroundColor={COLORS.dark} />
      <CityModal isVisiable={isVisiable} onClose={onClose} onCity={onCity} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    padding: 20,
  },
  text: {
    color: "white",
  },
});
