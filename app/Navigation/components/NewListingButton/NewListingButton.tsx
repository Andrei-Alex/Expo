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
 * @param {INewListingButton} props - The props passed to the component.
 * @param {Function} props.onPress - A callback function triggered when the button is pressed. This function should handle the desired action for creating a new listing.
 * @param {string} [props.testID='newListingButton'] - An optional ID used for testing purposes. Default is 'newListingButton'.
 * @returns {React.ReactElement} A stylized, interactive button component featuring a plus-circle icon, intended for adding new listings or similar functions in a React Native app.
 *
 **/

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
