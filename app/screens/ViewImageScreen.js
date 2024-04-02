import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import chair from "../assets/images/chair.jpg";
import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={chair} />
      <View style={styles.closeButton} />
      <View style={styles.deleteButton} />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  closeButton: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 40,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  deleteButton: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 40,
    backgroundColor: colors.secondary,
    borderRadius: 5,
  },
});
