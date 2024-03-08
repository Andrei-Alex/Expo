import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles, INewListingButton } from '.';
import { colors } from '../../../config';

/**
 * NewListingButton Component
 *
 * A customizable button component for React Native navigation, specifically designed for actions related to new listings.
 * It prominently features a plus-circle icon from the MaterialCommunityIcons set, signaling an action to add or create new items.
 * The component is wrapped in a `TouchableOpacity` for enhanced user interaction, allowing for feedback on touch with the
 * onPress prop. It is styled with a predefined `styles.container` and utilizes the `colors.white` for the icon color, ensuring
 * the button is both visually appealing and clearly visible.
 *
 * ### Usage
 *
 * ```jsx
 * <NewListingButton onPress={() => console.log('Button pressed!')} />
 * ```
 *
 * @component
 * @param {INewListingButton} props - The properties passed to the component.
 * @param {Function} props.onPress - The callback function that is called when the button is pressed. It should contain the action to be executed as part of the button's functionality.
 * @returns {React.ReactElement} A touch-responsive button component with a plus-circle icon, designed for adding new listings or similar actions in a React Native application.
 */

const NewListingButton: React.FC<INewListingButton> = ({
  onPress,
  testID = 'newListingButton'
}) => {
  return (
    <TouchableOpacity testID={testID} onPress={onPress}>
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
