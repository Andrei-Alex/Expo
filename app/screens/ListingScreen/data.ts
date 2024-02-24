import { ItemForSale } from './types';

export const dummyItems: ItemForSale[] = [
  {
    id: '1',
    title: 'Jacket',
    price: 100,
    image: require('../../assets/jacket.jpg')
  },
  {
    id: '2',
    title: 'Super Couch',
    price: 700,
    image: require('../../assets/couch.jpg')
  }
];
