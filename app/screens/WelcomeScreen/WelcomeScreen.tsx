import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { styles } from ".";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo-red.png")}
          style={styles.logo}
        />
        <Text>Sell What you don't need</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

export default WelcomeScreen;
