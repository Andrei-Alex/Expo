import { StyleSheet } from 'react-native';

import { colors } from '../../../config';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});
