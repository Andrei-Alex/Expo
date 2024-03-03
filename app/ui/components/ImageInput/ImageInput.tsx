import * as React from 'react';
import { View, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { Icon } from '../../atoms';
import { colors } from '../../../config';
import { IImageInput, styles, useCameraPermissions } from '.';
import * as ImagePicker from 'expo-image-picker';

const ImageInput: React.FC<IImageInput> = ({ imageUri, onChangeImage }) => {
  useCameraPermissions();
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete this?', [
        {
          text: 'Yes',
          onPress: () => onChangeImage(null)
        },
        {
          text: 'No'
        }
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
      if (!result.canceled) {
        onChangeImage(result.assets[0].uri);
      }
    } catch (e) {
      console.error('Error Reading images');
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <Icon
            iconColor={colors.medium}
            backgroundColor={'transparent'}
            name={'camera'}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;
