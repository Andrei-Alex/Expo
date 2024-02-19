import React from 'react';
import { View } from 'react-native';

import { styles, Props } from '.';
import { colors } from '../../../config';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Icon: React.FC<Props> = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white
}) => {
  return (
    <View
      style={[
        styles.icon,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor
        }
      ]}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default Icon;
