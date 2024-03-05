if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator, appTheme } from './app/Navigation';

export default function App() {
  return (
    <NavigationContainer theme={appTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
