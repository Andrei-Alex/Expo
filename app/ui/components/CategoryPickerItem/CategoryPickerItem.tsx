import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { AppText, Icon } from '../../atoms';
import { ICategoryPickerItem, styles } from '.';

const CategoryPickerItem: React.FC<ICategoryPickerItem> = ({
  onPress,
  item
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      testID={item.label}
      style={styles.container}
    >
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;
