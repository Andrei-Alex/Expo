import { icons } from '../../atoms/Icon';
import { DimensionValue, TextInputProps } from 'react-native';

export interface IAppTextInput extends TextInputProps {
  icon?: icons;
  width?: DimensionValue;
}
