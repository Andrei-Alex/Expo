import { MainScreen } from './app/ui/layouts';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import React from 'react';
import { Icon } from './app/ui/atoms';

export default function App() {
  return (
    <MainScreen>
      <Icon
        name={'email'}
        size={50}
        backgroundColor={'red'}
        iconColor={'white'}
      />
    </MainScreen>
  );
}
