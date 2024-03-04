import * as React from 'react';
import { View } from 'react-native';

import { styles, IImageInputList } from '.';
import { ImageInput } from '../../components';

const ImageInputList: React.FC<IImageInputList> = ({
  imageURIs = [],
  onRemoveImage,
  onAddImage
}) => {
  return (
    <>
      <View style={styles.container}>
        {imageURIs.map((uri) => (
          <View style={styles.image} key={uri}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </View>
    </>
  );
};

export default ImageInputList;
