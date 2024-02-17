import React from 'react';
import { Image, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '.';
import { colors } from '../../config';

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name={'close'} color={colors.white} size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name={'trash-can-outline'}
          color={colors.white}
          size={30}
        />
      </View>
      <Image
        style={styles.image}
        resizeMode={'contain'}
        source={require('../../assets/chair.jpg')}
      />
    </View>
  );
}

export default ViewImageScreen;
