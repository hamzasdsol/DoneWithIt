import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Constants from "expo-constants";

const Screen = ({ children, extraStyles }) => {
  return (
    <SafeAreaView style={[styles.screen, extraStyles]}>
      <View style={extraStyles}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#F2F4F4",
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
