import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const AppButton = ({ buttonText, bgColor, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { backgroundColor: bgColor }]}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    padding: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
});
