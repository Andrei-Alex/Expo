import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
text: {
    color: 'red',
   ...Platform.select({
       ios: {
           fontSize: 20,
           fontFamily: 'Avenir'
       },
       android : {
           fontSize: 18,
           fontFamily: 'Roboto'
       },
   })
}
});
