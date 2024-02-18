import { StyleSheet } from 'react-native';

import { colors } from '../../../config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  title: {
    fontWeight: '500'
  },
  subtitle: {
    color: colors.medium,
    fontWeight: '500'
  }
});
