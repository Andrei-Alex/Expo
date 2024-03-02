import * as React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { styles, IListItem } from '.';
import { AppText, Icon } from '../../atoms';
import { colors } from '../../../config';

const ListItem: React.FC<IListItem> = ({
  title,
  subTitle,
  IconComponent,
  image,
  onPress,
  renderRightActions
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subTitle && (
                <AppText style={styles.subtitle} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <Icon
              name={'chevron-right'}
              size={35}
              backgroundColor={'transparent'}
              iconColor={colors.medium}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;
