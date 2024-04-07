import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Constants from "expo-constants";

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#F2F4F4",
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
