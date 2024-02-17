import { Platform } from 'react-native';

export const isMobile: boolean =
  (Platform.OS === 'android' || Platform.OS === 'ios') ?? true;
export const isAndroid: boolean = Platform.OS === 'android' ?? true;
export const isIOS: boolean = Platform.OS === 'ios' ?? true;
