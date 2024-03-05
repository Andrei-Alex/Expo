import { icons } from '../../ui/atoms/Icon';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface IListingScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

export interface menuItem {
  key: string;
  title: string;
  image: {
    name: icons;
    backgroundColor: string;
  };
  targetScreen?: string;
}
