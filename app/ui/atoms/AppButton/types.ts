import { ViewStyle } from 'react-native';

export interface IAppButton {
  title: string;
  onPress: () => void;
  color?: string;
  style?: ViewStyle;
}
