import { TextStyle, TextProps } from 'react-native';

export interface IAppText extends TextProps {
  children: React.ReactNode;
  style?: TextStyle;
}
