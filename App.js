import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/ButtonComponent/AppButton";
import colors from "./app/config/colors";
import AppCard from "./app/components/AppCard";
import AppText from "./app/components/AppText";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem title="Hamza Abid" subTitle="5 listings" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    justifyContent: "center",
  },
});
