import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import AppCard from "../components/AppCard";
import Screen from "../components/Screen";
import ItemSeparator from "../components/ItemSeparator";

const data = [
  {
    id: 1,
    title: "Chair for sale",
    price: 100,
    image: require("../assets/images/chair.jpg"),
  },
  {
    id: 2,
    title: "Ball for sale",
    price: 1000,
    image: require("../assets/images/chair.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen extraStyles={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <AppCard
            image={item.image}
            title={item.title}
            subtitle={`$ ${item.price}`}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 16,
  },
});
