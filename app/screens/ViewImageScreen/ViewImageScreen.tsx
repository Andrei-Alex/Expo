import React from "react";
import { Image, View } from "react-native";

import { styles } from ".";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
      <Image
        style={styles.image}
        resizeMode={"contain"}
        source={require("../../assets/chair.jpg")}
      />
    </View>
  );
}

export default ViewImageScreen;
