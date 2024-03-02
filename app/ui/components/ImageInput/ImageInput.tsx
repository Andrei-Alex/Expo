import * as React from 'react';
import { View, Image } from 'react-native';
import { Icon } from '../../atoms';
import { colors } from '../../../config';
import { IImageInput, styles } from '.';

const ImageInput: React.FC<IImageInput> = ({ imageUri }) => {
  return (
    <View>
      {!imageUri && (
        <Icon
          iconColor={colors.medium}
          backgroundColor={'transparent'}
          name={'camera'}
        />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

export default ImageInput;
