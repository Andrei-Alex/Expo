import { ImageSourcePropType } from 'react-native';

export type ItemForSale = {
  id: string;
  title: string;
  price: number;
  image: ImageSourcePropType;
};
