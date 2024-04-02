import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Background from "../assets/images/background.jpg";
import Logo from "../assets/images/logo-red.png";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <ImageBackground style={styles.background} source={Background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Logo} resizeMode="contain" />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 40,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
