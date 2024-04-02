import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";

const AppText = ({ title, style }) => {
  return (
    <View>
      <Text style={[styles.text, style]}>{title}</Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
