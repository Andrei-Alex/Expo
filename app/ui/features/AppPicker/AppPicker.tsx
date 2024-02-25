import { AppText, Icon } from '../../atoms';
import React, { useState } from 'react';
import { Button, Modal, TouchableWithoutFeedback, View } from 'react-native';
import { colors } from '../../../config';
import { IAppPicker, styles } from './index';
import { MainScreen } from '../../layouts';

const AppPicker: React.FC<IAppPicker> = ({ icon = 'apps', placeholder }) => {
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
          <AppText style={styles.text}>{placeholder}</AppText>
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
        </MainScreen>
      </Modal>
    </>
  );
};

export default AppPicker;
