import { StatusBar, StyleSheet } from 'react-native';
import { isAndroid } from '../../config';

export const styles = StyleSheet.create({
  screen: {
    paddingTop: isAndroid ? StatusBar.currentHeight : 0
  }
});
