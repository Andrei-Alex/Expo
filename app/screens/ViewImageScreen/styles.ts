import { StyleSheet } from "react-native";
import {colors} from '../../config'
export const styles = StyleSheet.create({
  container: {
    backgroundColor:  colors.black,
    flex: 1,
  },
  closeIcon: {
     position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
