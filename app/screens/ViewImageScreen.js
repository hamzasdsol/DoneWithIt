import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import chair from "../assets/images/chair.jpg";
import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={chair} />
      <MaterialCommunityIcons
        style={styles.closeButton}
        name="close"
        color={colors.white}
        size={40}
      />
      <MaterialCommunityIcons
        style={styles.deleteButton}
        name="trash-can-outline"
        color={colors.white}
        size={40}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  closeButton: {
    position: "absolute",
    top: 40,
    left: 40,
  },
  deleteButton: {
    position: "absolute",
    top: 40,
    right: 40,
  },
});
