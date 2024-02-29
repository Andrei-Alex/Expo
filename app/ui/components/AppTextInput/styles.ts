import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../../config';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  textInput: {
    fontSize: 18,
    fontFamily: fonts.primary,
    color: colors.dark
  },
  icon: {
    marginRight: 10
  }
});
