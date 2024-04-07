import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import AccountsListItem from "../components/AccountsListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ItemSeparator from "../components/ItemSeparator";

const MyAccountScreen = () => {
  const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
  ];

  return (
    <Screen>
      <View style={styles.userData}>
        <ListItem
          title="Hamza"
          subTitle="hamza.abid8758@gmail.com"
          image={require("../assets/images/chair.jpg")}
        />
      </View>

      <View style={styles.itemsContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  userData: {
    backgroundColor: "#FDFEFE",
  },
  itemsContainer: {
    marginVertical: 24,
  },
});
