import { colors } from '../../config';
import { menuItem } from './types';

export const menuItems: menuItem[] = [
  {
    key: '1',
    title: 'Listings',
    image: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    key: '2',
    title: 'Messages',
    image: {
      name: 'format-list-bulleted',
      backgroundColor: colors.secondary
    }
  }
];
