import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles, Props } from '.';
import { colors } from '../../../config';

const ListDeleteItemAction: React.FC<Props> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <MaterialCommunityIcons
        name={'trash-can'}
        size={35}
        color={colors.white}
      />
    </View>
  );
};

export default ListDeleteItemAction;
