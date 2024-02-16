import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { styles } from ".";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <Image
        style={styles.image}
        resizeMode={"contain"}
        source={require("../../assets/chair.jpg")}
      />
    </View>
  );
}

export default ViewImageScreen;
