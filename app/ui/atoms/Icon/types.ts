import { OpaqueColorValue } from 'react-native';

export enum icons {
  bullet = 'format-list-bulleted',
  email = 'email',
  home = 'home'
}

export type Props = {
  name: icons;
  size?: number;
  backgroundColor?: string;
  iconColor?: string | OpaqueColorValue;
  testID?: string;
};
