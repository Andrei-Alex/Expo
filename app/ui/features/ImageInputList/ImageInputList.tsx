import * as React from 'react';
import { ScrollView, View } from 'react-native';

import { styles, IImageInputList } from '.';
import { ImageInput } from '../../components';
import { useRef } from 'react';

const ImageInputList: React.FC<IImageInputList> = ({
  imageURIs = [],
  onRemoveImage,
  onAddImage
}) => {
  const scrollView = useRef<ScrollView>(null);

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
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
      </ScrollView>
    </View>
  );
};

export default ImageInputList;
