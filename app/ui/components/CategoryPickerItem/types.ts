import { icons } from '../../atoms/Icon';
import { DimensionValue, ViewStyle } from 'react-native';
import { IPickerItem } from '../PickerItem';

export type item = {
  label: string;
  value: number;
};

export interface IAppPicker {
  onSelectItem: (item: item) => void;
  selectedItem?: item;
  items: item[];
  icon?: icons;
  placeholder?: string;
  modalTestId?: string;
  pickerTestId?: string;
  PickerItemComponent?: React.FC<IPickerItem>;
  style?: ViewStyle;
  width?: DimensionValue;
}
