import { StyleSheet } from 'react-native';
import { colors } from '../../../config';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 10,
    borderRadius: 40,
    height: 70,
    width: 70,
    bottom: 20
  }
});
