import { ImageSourcePropType } from 'react-native';

export type Props = {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
  onPress: () => void;
  renderRightActions: any;
};
