import React from 'react';
import { Text } from 'react-native';

import { styles, Props } from '.';

/**
 * AppText Component
 *
 * A wrapper component for the Text element in React Native, designed to apply a consistent base style across all text elements
 * within the app while also allowing for custom styles to be passed in as needed. It simplifies the process of styling text
 * throughout the application by centralizing common styling attributes and reducing the need for repetitive style declarations.
 * This component accepts children (the text content) and a style prop for additional styling.
 *
 * ### Usage
 * ```jsx
 * <AppText style={customStyle}>Hello World</AppText>
 * ```
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The text content to be displayed.
 * @param {Object} [props.style] - Additional styles to be applied to the Text component, merged with the base text style.
 * @returns {React.ReactElement} A Text component with applied base and additional custom styles.
 */

const AppText: React.FC<Props> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;
