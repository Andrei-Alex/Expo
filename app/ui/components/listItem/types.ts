import { ImageSourcePropType } from 'react-native';

export type Props = {
  title: string;
  subTitle?: string;
  ImageComponent?: React.ReactNode;
  image?: ImageSourcePropType;
  onPress: () => void;
  renderRightActions: any;
};
