import React from 'react';
import { Image, View } from 'react-native';

import { styles, Props } from './index';
import { AppText } from '../../atoms';

const Card: React.FC<Props> = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;
