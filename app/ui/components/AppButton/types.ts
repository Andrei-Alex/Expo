import { ViewStyle } from 'react-native';

export type Props = {
  title: string;
  onPress: () => void;
  color?: string;
  style?: ViewStyle;
};
