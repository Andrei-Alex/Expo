import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles, Props } from '.';
import { colors } from '../../../config';

/**
 * ListDeleteAction Component
 *
 * A functional component designed for rendering a delete action within lists, utilizing the MaterialCommunityIcons for visual representation.
 * This component is typically used in swipeable lists to provide users with an intuitive and accessible way to delete items. It displays a trash can icon
 * indicating the action to be taken. The component allows for custom styling to be applied, enabling it to integrate seamlessly with various list designs.
 * It leverages React Native's View component for layout and MaterialCommunityIcons for the iconography, ensuring a consistent look and feel across the app.
 *
 * ### Usage
 * ```jsx
 * <ListDeleteAction style={customStyle} />
 * ```
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Object} [props.style] - Additional styles to be applied to the container View, allowing for customization.
 * @returns {React.ReactElement} A component that renders a visually indicative delete action for list items.
 */

const ListDeleteItemAction: React.FC<Props> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <MaterialCommunityIcons
        name={'trash-can'}
        size={35}
        color={colors.white}
      />
    </View>
  );
};

export default ListDeleteItemAction;
