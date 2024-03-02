import { IListMessage } from './types';

export const dummyMessages: IListMessage[] = [
  {
    id: 1,
    title: 'First Title',
    description: 'Hey! Is this item still available?',
    image: require('../../assets/logo-red.png')
  },
  {
    id: 2,
    title: 'Second Title',
    description:
      "I'm interested in this item. When will you be able to post it ?",
    image: require('../../assets/logo-red.png')
  }
];
