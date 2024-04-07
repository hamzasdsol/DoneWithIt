import React from "react";
import { StyleSheet, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import ItemSeparator from "./ItemSeparator";

const AccountsListItem = ({ icon, iconSize, iconBg, iconColor, text }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.icon, { backgroundColor: iconBg }]}>
          <MaterialCommunityIcons
            name={icon}
            size={iconSize}
            color={iconColor}
          />
        </View>
        <AppText title={text} style={{ fontWeight: "bold", marginLeft: 16 }} />
      </View>
      <ItemSeparator />
    </View>
  );
};

export default AccountsListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FDFEFE",
    padding: 16,
    alignItems: "center",
  },
  icon: {
    borderRadius: 30,
    padding: 16,
  },
});
