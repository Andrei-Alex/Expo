import { icons } from '../../atoms/Icon';
import { ViewStyle } from 'react-native';

export type item = {
  label: string;
  value: number;
};

export interface IAppPicker {
  onSelectItem: (item: item) => void;
  selectedItem: item;
  items: item[];
  icon?: icons;
  placeholder?: string;
  modalTestId?: string;
  pickerTestId?: string;
  style?: ViewStyle;
}
