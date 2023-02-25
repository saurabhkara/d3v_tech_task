import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import { getWeatherDataThunk } from "../redux/reduxThunk";
import { StackNavigationParams } from "../App";
import { AppDispatch, RootState } from "../redux/store";
import COLORS from "../helper/colors";
import Card from "../components/Card";

type THomeProps = NativeStackScreenProps<StackNavigationParams, "home">;

export default function Home({ navigation }: THomeProps) {
  const { isLoading, isError, data } = useSelector(
    (state: RootState) => state.weather
  );
  const dispatch = useDispatch<AppDispatch>();
  console.log("redux thunk data hh");
  useEffect(() => {
    // dispatch(getWeatherDataThunk('mumbai'));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.location}
            onPress={() => navigation.navigate("details")}
          >
            <Entypo name="location-pin" size={24} color="black" />
            <Text style={styles.city}>Mumbai</Text>
            <Entypo name="chevron-small-down" size={24} color="black" />
          </TouchableOpacity>
          <EvilIcons name="calendar" size={24} color="black" />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://res.cloudinary.com/dew3bffz3/image/upload/v1677329602/Pngtree_vector_sun_sun_3188529_txy2yr.png",
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 25,
            alignItems: "center",
            justifyContent: "center",
            height: "25%",
          }}
        >
          <Text style={styles.status}>Thunderstorm !!</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.temperature}>23</Text>
            <Text style={styles.degree}>°</Text>
            <Text style={styles.cel}>C</Text>
          </View>
        </View>
        <View style={{ height: "30%" }}>
          <FlatList
            data={[{}, {}, {}, {}]}
            renderItem={() => <Card />}
            // keyExtractor={}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <StatusBar barStyle={"light-content"} backgroundColor={COLORS.primary} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
  },
  header: {
    marginVertical: "8%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
  },
  location: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  city: {
    marginLeft: "20%",
    fontSize: 20,
    fontWeight: "600",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "15%",
  },
  image: {
    height: "100%",
    width: 150,
  },
  status: {
    fontSize: 20,
    marginVertical: 10,
  },
  temperature: {
    fontSize: 70,
  },
  degree: {
    fontSize: 35,
    lineHeight: 45,
  },
  cel: {
    fontSize: 40,
    lineHeight: 110,
  },
});
