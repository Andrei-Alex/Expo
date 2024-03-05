import { DefaultTheme } from '@react-navigation/native';
import { colors } from '../../config';

export const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white
  }
};
