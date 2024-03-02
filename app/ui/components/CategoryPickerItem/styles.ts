import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../../config';

const baseTextStyle = {
  fontFamily: fonts.primary,
  fontSize: 18,
  marginRight: 10,
  flex: 1
};
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  text: {
    ...baseTextStyle,
    color: colors.dark
  },
  placeholder: {
    ...baseTextStyle,
    color: colors.medium
  }
});
