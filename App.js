import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/ButtonComponent/AppButton";
import colors from "./app/config/colors";
import AppCard from "./app/components/AppCard";
import AppText from "./app/components/AppText";
import ListItem from "./app/components/ListItem";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import AccountsListItem from "./app/components/AccountsListItem";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";

import Placeholder from "./app/assets/icon.png";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return <ListingsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    justifyContent: "center",
  },
});
