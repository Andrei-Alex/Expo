import { ImageSourcePropType } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface IListingScreenProps {
  navigation: NavigationProp<ParamListBase>;
}
export type ItemForSale = {
  id: string;
  title: string;
  price: number;
  image: ImageSourcePropType;
};
