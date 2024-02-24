import { OpaqueColorValue } from 'react-native';

export type icons = 'format-list-bulleted' | 'email' | 'logout' | 'home';

export type Props = {
  name: icons;
  size?: number;
  backgroundColor?: string;
  iconColor?: string | OpaqueColorValue;
  testID?: string;
};
