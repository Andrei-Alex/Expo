import React from 'react';
import { View } from 'react-native';

import { styles, Props } from '.';

const ListItemSeparator: React.FC<Props> = ({ style }) => {
  return <View style={[styles.separator, style]}></View>;
};

export default ListItemSeparator;
