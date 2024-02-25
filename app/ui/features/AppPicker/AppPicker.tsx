import { AppText, Icon } from '../../atoms';
import React, { useState } from 'react';
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

const AppPicker: React.FC<IAppPicker> = ({
  onSelectItem,
  selectedItem,
  items,
  icon = 'apps',
  placeholder
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon}
              size={30}
              iconColor={colors.medium}
              backgroundColor={'transparent'}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
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
      <Modal visible={modalVisible} animationType={'slide'}>
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
