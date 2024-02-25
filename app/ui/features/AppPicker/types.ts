import { icons } from '../../atoms/Icon';

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
}
