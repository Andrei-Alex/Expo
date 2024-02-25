import { OpaqueColorValue, ViewStyle } from 'react-native';

export type icons =
  | 'format-list-bulleted'
  | 'email'
  | 'logout'
  | 'home'
  | 'chevron-down'
  | 'apps';

export type Props = {
  name: icons;
  size?: number;
  backgroundColor?: string;
  iconColor?: string | OpaqueColorValue;
  testID?: string;
  style?: ViewStyle;
};
