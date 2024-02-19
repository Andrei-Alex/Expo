import { StyleSheet } from 'react-native';

import { colors } from '../../../config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  title: {
    fontWeight: '500'
  },
  subtitle: {
    color: colors.medium,
    fontWeight: '500'
  }
});
