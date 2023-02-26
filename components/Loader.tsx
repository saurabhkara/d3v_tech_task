import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../helper/colors";

export default function Loader() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={COLORS.lightPrimary} size={"large"} />
      <Text style={{ color: COLORS.lightPrimary }}>Loading ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.lightPrimary,
  },
});
