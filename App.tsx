if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import React from 'react';

import { AccountScreen } from './app/screens';

export default function App() {
  return <AccountScreen />;
}
