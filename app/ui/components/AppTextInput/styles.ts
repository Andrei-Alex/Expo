import { StyleSheet } from 'react-native';

import { colors, isAndroid } from '../../../config';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  textInput: {
    fontSize: 18,
    fontFamily: isAndroid ? 'Roboto' : 'Avenir',
    color: colors.dark
  },
  icon: {
    marginRight: 10
  }
});
