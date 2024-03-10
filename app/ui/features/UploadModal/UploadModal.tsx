import * as React from 'react';
import { Modal, View } from 'react-native';

const Progress = require('react-native-progress');

import { styles, IUploadScreen } from './index';
import { colors } from '../../../config';

const UploadModal: React.FC<IUploadScreen> = ({
  progress = 0,
  visible = false
}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar color={colors.primary} width={200} progress={progress} />
      </View>
    </Modal>
  );
};

export default UploadModal;
