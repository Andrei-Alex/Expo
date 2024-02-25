import { isAndroid } from '../env/env';

export const fonts: Record<string, string> = {
  primary: isAndroid ? 'Roboto' : 'Avenir'
};
