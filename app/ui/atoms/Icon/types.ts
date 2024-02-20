import { OpaqueColorValue } from 'react-native';

export type Props = {
  name: 'email' | 'home';
  size?: number;
  backgroundColor?: string;
  iconColor?: string | OpaqueColorValue;
};
