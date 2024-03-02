import { StyleSheet } from 'react-native';

import { colors } from '../../../config';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    width: 100
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
