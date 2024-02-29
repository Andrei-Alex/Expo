import { TextInput, View } from 'react-native';
import { Icon } from '../../atoms';
import { IAppTextInput, styles } from '.';
import { colors } from '../../../config';

/**
 * AppTextInput Component
 *
 * A custom TextInput component for React Native that integrates an optional icon within the text input field.
 * This component enhances the standard TextInput by allowing the inclusion of an icon for visual cues or interaction purposes,
 * making it more versatile and user-friendly. The component leverages React Native's TextInputProps, enabling it to accept
 * all standard properties of a TextInput. Additionally, it introduces an `icon` prop to specify the icon displayed.
 *
 * ### Usage
 * ```jsx
 * <AppTextInput
 *   icon="search"
 *   placeholder="Search here"
 *   onChangeText={(text) => console.log(text)}
 * />
 * ```
 *
 * @component
 * @param {IAppTextInput} props - The properties passed to the component.
 * @param {icons} [props.icon] - The name of the icon to display within the input field, from the predefined icons set.
 * @param {TextInputProps} props - Standard TextInput properties such as `placeholder`, `onChangeText`, etc., are also accepted.
 * @returns {React.ReactElement} A customized TextInput component with an optional icon.
 */
const AppTextInput: React.FC<IAppTextInput> = ({
  icon,
  style,
  ...inputProps
}) => {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <Icon
          name={icon}
          size={30}
          iconColor={colors.medium}
          backgroundColor={'transparent'}
          style={styles.icon}
        />
      )}
      <TextInput {...inputProps} />
    </View>
  );
};

export default AppTextInput;
