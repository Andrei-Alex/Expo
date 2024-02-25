import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../../config';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  text: {
    fontFamily: fonts.primary,
    color: colors.dark,
    fontSize: 18,
    marginRight: 10,
    flex: 1
  }
});
