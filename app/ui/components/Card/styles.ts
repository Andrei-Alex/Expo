import { StyleSheet } from 'react-native';

import { colors } from '../../../config';
export const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    marginBottom: 7
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  }
});
