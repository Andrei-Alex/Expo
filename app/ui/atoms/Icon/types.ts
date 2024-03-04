import { OpaqueColorValue, ViewStyle } from 'react-native';

export type icons =
  | 'format-list-bulleted'
  | 'email'
  | 'logout'
  | 'home'
  | 'chevron-down'
  | 'apps'
  | 'lock'
  | 'camera'
  | 'account'
  | 'chevron-right';

export interface IIcon {
  name: icons;
  size?: number;
  backgroundColor?: string;
  iconColor?: string | OpaqueColorValue;
  testID?: string;
  style?: ViewStyle;
}
