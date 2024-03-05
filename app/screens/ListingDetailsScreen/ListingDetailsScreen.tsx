import * as React from 'react';
import { Image, View } from 'react-native';

import { styles } from '.';
import { AppText } from '../../ui/atoms';

/**
 * ListingDetailsScreen Component
 *
 * Presents detailed information about a specific listing, including an image, title, and price. This screen is designed
 * for displaying details of items for sale, such as a red jacket in the provided example. It leverages the React Native
 * framework for mobile UI development, utilizing standard components like View and Image for layout and styling, and custom
 * components like AppText for text rendering. Styles are applied using a separate stylesheet for organization and reusability.
 *
 * ### Usage
 * ```jsx
 * <ListingDetailsScreen />
 * ```
 *
 * @component
 * @example
 * return (
 *   <ListingDetailsScreen />
 * );
 *
 * @returns {React.ReactElement} A screen component showcasing the details of a listing, including an image of the item, its title, and its price.
 */
function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image source={listing.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <View style={styles.userContainer} />
      </View>
    </View>
  );
}

export default ListingDetailsScreen;
