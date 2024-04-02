import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Background from "../assets/images/background.jpg";
import Logo from "../assets/images/logo-red.png";
import colors from "../config/colors";
import AppButton from "../components/ButtonComponent/AppButton";

const onLoginPressed = () => {
  console.warn("login pressed");
};

const onResgiterPressed = () => {
  console.warn("register pressed");
};

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={Background}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Logo} resizeMode="contain" />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          buttonText="Login"
          bgColor={colors.primary}
          onPress={onLoginPressed}
        />
        <AppButton
          buttonText="Register"
          bgColor={colors.secondary}
          onPress={onResgiterPressed}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 80,
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },

  buttonsContainer: {
    width: "100%",
    padding: 16,
  },
});
