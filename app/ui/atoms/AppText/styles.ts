import { StyleSheet, Platform } from "react-native";
import {isAndroid} from "../../../config";
export const styles = StyleSheet.create({
text: {
    fontSize: 18,
    fontFamily: isAndroid ? 'Roboto' : 'Avenir',
}
});
