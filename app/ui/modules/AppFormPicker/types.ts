import { DimensionValue } from 'react-native';
import { IPickerItem } from '../../components/PickerItem';

export type item = {
  label: string;
  value: number;
};

export interface IAppFormPicker {
  items: item[];
  name: string;
  placeholder: string;
  width?: DimensionValue;
  PickerItemComponent?: React.FC<IPickerItem>;
}
