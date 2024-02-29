import { ImageSourcePropType } from 'react-native';

export interface IListMessage {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}
