import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';

import { styles, Props } from './index';
import { AppText } from '../../atoms';
import { colors } from '../../../config';

const ListItem: React.FC<Props> = ({ title, subTitle, image, onPress }) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
