import { DimensionValue } from 'react-native';

export type item = {
  label: string;
  value: number;
};

export interface IAppFormPicker {
  items: item[];
  name: string;
  placeholder: string;
  width?: DimensionValue;
}
