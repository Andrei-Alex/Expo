import { TouchableOpacity } from 'react-native';
import { AppText } from '../../atoms';
import { IPickerItem, styles } from '.';

/**
 * PickerItem Component
 *
 * A component designed for individual items within a picker list in React Native applications. It acts as an interactive list item, utilizing a `TouchableOpacity` for touch interactions, allowing users to select an option from a list. The component displays a text label for the item and executes a callback function when the item is pressed. This makes it a versatile component for creating customizable picker interfaces, where users can tap an item to select it.
 *
 * ### Usage
 *
 * ```jsx
 * <PickerItem
 *   label="Option 1"
 *   onPress={() => console.log("Option 1 selected")}
 * />
 * ```
 *
 * This example demonstrates how to render a `PickerItem` with a label "Option 1". When the item is pressed, it logs a message to the console. This approach allows for the creation of a list of selectable items, each with a unique action.
 *
 * @component
 * @param {IPickerItem} props - The properties passed to the component.
 * @param {string} props.label - The text to be displayed on the item, providing the user with information about the option they are selecting.
 * @param {() => void} props.onPress - A callback function that is called when the item is pressed. This function can perform any action, such as updating the state to reflect the selected item.
 * @returns {React.ReactElement} A touchable, selectable item for use in custom picker components, styled according to the `styles` object.
 */
const PickerItem: React.FC<IPickerItem> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()} testID={label}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;
