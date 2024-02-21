import React from 'react';
import { View } from 'react-native';

import { styles, Props } from '.';
import { colors } from '../../../config';

import { MaterialCommunityIcons } from '@expo/vector-icons';

/**
 * Icon Component
 *
 * A reusable and customizable icon component that integrates MaterialCommunityIcons from '@expo/vector-icons' library, providing
 * a wide range of icons suitable for various application needs. It leverages the flexibility of React Native's View component
 * to create a container for the icon, which can be customized in size, background color, and icon color. This component
 * simplifies the process of adding icons to your app, ensuring consistency in design and ease of use.
 *
 * ### Usage
 * ```jsx
 * <Icon
 *   name="email"
 *   size={50}
 *   backgroundColor="#f0f"
 *   iconColor="#fff"
 * />
 * ```
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the icon to be displayed.
 * @param {number} [props.size=40] - The size of the icon and its container. Defaults to 40.
 * @param {string} [props.backgroundColor=colors.black] - The background color of the icon container. Defaults to black.
 * @param {string} [props.iconColor=colors.white] - The color of the icon. Defaults to white.
 * @returns {React.ReactElement} A customizable icon component that can be easily integrated into React Native applications.
 */
const Icon: React.FC<Props> = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white
}) => {
  return (
    <View
      style={[
        styles.icon,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor
        }
      ]}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default Icon;
