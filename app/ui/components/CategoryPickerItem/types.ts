import { icons } from '../../atoms/Icon';

export interface ICategoryPickerItem {
  item: { label: string; icon: icons; backgroundColor: string };
  onPress: () => void;
}
