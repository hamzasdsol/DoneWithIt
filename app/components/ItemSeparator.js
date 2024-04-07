import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

export default ItemSeparator;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.lightGray,
  },
});
