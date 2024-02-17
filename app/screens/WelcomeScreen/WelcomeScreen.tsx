import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { styles } from ".";
import {AppButton} from "../../ui/components";

function WelcomeScreen() {
  return (
    <ImageBackground
        blurRadius={2}
      source={require("../../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo-red.png")}
          style={styles.logo}
        />
        <Text style={styles.tagLine}>Sell What you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={'Login'} onPress={() => {console.log('Tapped')}} />
        <AppButton title={'Register'} onPress={() => {console.log('Tapped')}} color={'secondary'} />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;
