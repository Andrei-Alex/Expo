import * as React from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';

import { styles, Props } from './index';
import { AppText } from '../../atoms';

/**
 * Card Component
 *
 * A reusable card component for React Native applications, designed to display an image along with a title and a subtitle. This component is ideal for presenting a collection of information in a visually appealing manner. It leverages React Native's `View` and `Image` components for layout and image display, respectively, and utilizes custom `AppText` components for text rendering. The `Card` component is highly customizable through its props, allowing for varied use cases such as displaying product information, user profiles, or news articles.
 *
 * ### Usage
 *
 * ```jsx
 * <Card
 *   title="Card Title"
 *   subTitle="Card Subtitle"
 *   image={require('./path/to/image.jpg')}
 * />
 * ```
 *
 * @component
 * @param {Props} props - The properties passed to the component.
 * @param {string} props.title - The title text to be displayed on the card. This is typically used to provide a concise summary or name related to the card's content.
 * @param {string} props.subTitle - The subtitle text displayed below the title, offering additional detail or context.
 * @param {ImageSourcePropType} props.image - The source of the image to be displayed on the card. This prop accepts a variety of formats for specifying images, including local images using `require` or remote images via URI.
 * @returns {React.ReactElement} A card component that displays an image, a title, and a subtitle, styled according to the `styles` object.
 */

const Card: React.FC<Props> = ({ title, subTitle, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subtitle} numberOfLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
