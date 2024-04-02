import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import Chair from "../../assets/images/chair.jpg";
import colors from "../../config/colors";

const AppCard = ({
  image,
  title = "White chair for sale!",
  subtitle = "$100",
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Chair} resizeMode="repeat" />
      <View style={styles.text_container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  text_container: {
    width: "100%",
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.black,
    marginVertical: "5",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.secondary,
    marginVertical: "5",
  },
});
