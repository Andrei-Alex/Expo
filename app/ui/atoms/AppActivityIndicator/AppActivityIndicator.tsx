import * as React from 'react';

import { IAppActivityIndicator, styles } from '.';

import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';

const AppActivityIndicator: React.FC<IAppActivityIndicator> = ({
  visible = false
}) => {
  useEffect(() => {
    animation.current?.play();
  }, []);
  const animation = useRef(null);
  if (!visible) return null;
  return (
    <LottieView
      ref={animation}
      style={{
        width: 200,
        height: 200,
        backgroundColor: '#eee'
      }}
      loop
      source={require('../../../assets/animations/loading.json')}
    />
  );
};

export default AppActivityIndicator;
