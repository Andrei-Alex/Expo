if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthNavigator } from './app/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
