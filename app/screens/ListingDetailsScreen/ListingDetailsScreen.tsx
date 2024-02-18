import React from 'react';
import { Image, View } from 'react-native';

import { styles } from '.';
import { AppText } from '../../ui/atoms';

function ListingDetailsScreen() {
  return (
    <View>
      <Image source={require('../../assets/jacket.jpg')} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}></View>
      </View>
    </View>
  );
}

export default ListingDetailsScreen;
