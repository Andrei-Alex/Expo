import { Animated, ImageSourcePropType } from 'react-native';
import { ReactNode } from 'react';

export type RenderRightActions = (
  progressAnimatedValue: Animated.AnimatedInterpolation<number>,
  dragAnimatedValue: Animated.AnimatedInterpolation<number>
) => ReactNode;

export interface IListItem {
  title: string;
  subTitle?: string;
  ImageComponent?: React.ReactNode;
  image?: ImageSourcePropType;
  onPress?: () => void;
  renderRightActions?: RenderRightActions;
}
