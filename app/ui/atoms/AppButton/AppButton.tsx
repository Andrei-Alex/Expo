import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles, IAppButton } from './index';
import { colors } from '../../../config';

/**
 * MainScreen Component
 *
 * A foundational layout component for React Native applications that ensures content is displayed within the safe area of the
 * device screen. It utilizes a `SafeAreaView` to avoid overlaps with status bars, notches, and other system UI elements on
 * modern devices. The component accepts children elements and an optional style prop to customize its appearance.
 *
 * ### Usage
 *
 * ```jsx
 * <MainScreen style={{ flex: 1, justifyContent: 'center' }}>
 *   <Text>Welcome to the Main Screen!</Text>
 * </MainScreen>
 * ```
 *
 * @component
 * @param {Props} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the `MainScreen`. This can include any valid React elements such as views, texts, images, etc.
 * @param {ViewStyle} [props.style] - Optional. Custom style properties to apply to the `SafeAreaView` container. This allows for customizing the layout, background color, padding, and other style properties of the screen.
 * @returns {React.ReactElement} A safe area aware container that can be used as the main layout component for screens in a React Native application.
 */

const AppButton: React.FC<IAppButton> = ({
  title,
  onPress,
  color = 'primary',
  style
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
