import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles, INewListingButton } from '.';
import { colors } from '../../../config';

const NewListingButton: React.FC<INewListingButton> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={'plus-circle'}
          color={colors.white}
          size={30}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewListingButton;
