import { icons } from '../../ui/atoms/Icon';

export type menuItem = {
  key: string;
  title: string;
  image: {
    name: icons;
    backgroundColor: string;
  };
};
