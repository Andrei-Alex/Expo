import * as React from 'react';

import { IAppActivityIndicator, styles } from '.';

import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';

const AppActivityIndicator: React.FC<IAppActivityIndicator> = ({
  visible = false,
  testID = 'lottie-activity'
}) => {
  useEffect(() => {
    animation.current?.play();
  }, []);
  const animation = useRef(null);
  if (!visible) return null;
  return (
    <LottieView
      testID={testID}
      ref={animation}
      style={styles.lottie}
      loop
      source={require('../../../assets/animations/loading.json')}
    />
  );
};

export default AppActivityIndicator;
