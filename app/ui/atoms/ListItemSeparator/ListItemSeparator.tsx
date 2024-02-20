import React from 'react';
import { View } from 'react-native';

import { styles, Props } from '.';

/**
 * ListItemSeparator Component
 *
 * A simple yet effective component designed to visually separate items within a list. It uses the View component from React Native
 * to render a line or space that distinguishes between individual list items, enhancing the overall user interface by providing clear
 * division and organization of content. The component accepts a style prop, allowing for customization of the separator's appearance such as
 * its color, height, or margins, to match the design requirements of the app. This flexibility ensures that the ListItemSeparator can be
 * seamlessly integrated into different list styles and layouts.
 *
 * ### Usage
 * ```jsx
 * <ListItemSeparator style={customStyle} />
 * ```
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Object} [props.style] - Additional styles to be applied to the separator, enabling customization of its appearance.
 * @returns {React.ReactElement} A component that renders a visual separator for items in a list.
 */

const ListItemSeparator: React.FC<Props> = ({ style }) => {
  return <View style={[styles.separator, style]} />;
};

export default ListItemSeparator;
