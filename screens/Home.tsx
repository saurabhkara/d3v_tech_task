import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";
import { Entypo, EvilIcons, Feather } from "@expo/vector-icons";
import { getWeatherDataThunk } from "../redux/reduxThunk";
import { StackNavigationParams } from "../App";
import { AppDispatch, RootState } from "../redux/store";
import COLORS from "../helper/colors";
import Card from "../components/Card";
import { List } from "../model/types";
import { getCurrentTime } from "../helper/timeConverter";
import { updateData } from "../redux/weatherSlice";

type THomeProps = NativeStackScreenProps<StackNavigationParams, "home">;

export default function Home({ navigation }: THomeProps) {
  const [refresh, setRefresh] = useState(false);
  const { isLoading, isError, data, lastUpdated } = useSelector(
    (state: RootState) => state.weather
  );
  const currTemp: string = data.list[0]
    ? data.list[0].main.temp.toFixed() + ""
    : isError;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getWeatherDataThunk("mumbai")).then(() => {
      dispatch(updateData({ lastUpdated: getCurrentTime() }));
    });
  }, [refresh]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.location}
            onPress={() => navigation.navigate("details")}
          >
            <Entypo name="location-pin" size={24} color="black" />
            <Text style={styles.city}>{data.city.name}</Text>
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
            marginTop: 10,
            marginBottom: 30,
            alignItems: "center",
            justifyContent: "center",
            height: "25%",
          }}
        >
          {isLoading ? (
            <View style={styles.loading}>
              <ActivityIndicator color={COLORS.lightPrimary} size={"large"} />
              <Text style={{ color: COLORS.lightPrimary }}>Loading ...</Text>
            </View>
          ) : (
            <>
              <Text style={styles.status}>
                {data.list[0].weather[0].description}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.temperature}>{currTemp}</Text>
                <Text style={styles.degree}>°</Text>
                <Text style={styles.cel}>C</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "grey" }}>Updated at {lastUpdated}</Text>
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => setRefresh(!refresh)}
                >
                  <Feather name="refresh-cw" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>

        <View style={{ height: "30%", marginTop: 20 }}>
          <FlatList
            ListEmptyComponent={() => (
              <View>
                <Text>Loading........</Text>
              </View>
            )}
            data={data.list}
            renderItem={({ item }: ListRenderItemInfo<List>) => (
              <Card list={item} />
            )}
            keyExtractor={(item) => item.dt_txt}
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
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.lightPrimary,
  },
});
