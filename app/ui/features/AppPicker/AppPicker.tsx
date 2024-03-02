import { AppText, Icon } from '../../atoms';
import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { colors } from '../../../config';
import { IAppPicker, styles } from './index';
import { MainScreen } from '../../layouts';
import { PickerItem } from '../../components';

/**
 * AppPicker Component
 *
 * A custom picker component for React Native that displays a modal list of selectable items. The component integrates
 * an optional leading icon, and displays the selected item's label or a placeholder when no item is selected. Tapping
 * on the component opens a modal with a list of items, each represented by a `PickerItem`. The user can select an item
 * from the list, which then updates the displayed label and invokes the `onSelectItem` callback with the selected item.
 *
 * ### Usage
 *
 * ```jsx
 * <AppPicker
 *   items={[{ label: 'Item 1', value: 1 }, { label: 'Item 2', value: 2 }]}
 *   selectedItem={{ label: 'Item 1', value: 1 }}
 *   onSelectItem={(item) => console.log(item)}
 *   icon="apps"
 *   placeholder="Select an item"
 * />
 * ```
 *
 * @component
 * @param {IAppPicker} props - The properties passed to the component.
 * @param {(item: item) => void} props.onSelectItem - Callback function that is invoked with the selected item when an item is selected.
 * @param {item} props.selectedItem - The currently selected item, used to display the label in the picker field. If no item is selected, the `placeholder` is displayed instead.
 * @param {item[]} props.items - An array of items that the user can select from. Each item must have a `label` for display and a `value` as a unique identifier.
 * @param {icons} [props.icon] - Optional. The name of the icon to display on the left side of the picker field, from the predefined set of icons.
 * @param {string} [props.placeholder] - Optional. The text to display when no item is selected.
 * @returns {React.ReactElement} A customizable picker component with an optional icon and a modal selection list.
 */
const AppPicker: React.FC<IAppPicker> = ({
  onSelectItem,
  selectedItem,
  items,
  icon,
  placeholder,
  modalTestId = 'modalPickerID',
  pickerTestId = 'pickerTestID',
  style,
  width = '100%'
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => setModalVisible(true)}
        testID={pickerTestId}
      >
        <View style={[styles.container, style, [{ width: width }]]}>
          {icon && (
            <Icon
              name={icon}
              size={30}
              iconColor={colors.medium}
              backgroundColor={'transparent'}
              style={styles.icon}
            />
          )}
          <AppText style={selectedItem ? styles.text : styles.placeholder}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <Icon
            name={'chevron-down'}
            size={30}
            iconColor={colors.medium}
            backgroundColor={'transparent'}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={modalVisible}
        animationType={'slide'}
        testID={modalTestId}
      >
        <MainScreen>
          <Button title={'Close'} onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </MainScreen>
      </Modal>
    </>
  );
};

export default AppPicker;
