import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import Placeholder from "../../assets/images/chair.jpg";
import AppText from "../AppText";

const ListItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Placeholder} resizeMode="stretch" />
      <View style={styles.detailsContainer}>
        <AppText title={title} style={{ fontWeight: "500" }} />
        <AppText title={subTitle} />
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginHorizontal: 10,
  },
});
