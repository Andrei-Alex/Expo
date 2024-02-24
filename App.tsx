if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import React from 'react';

import { ListingScreen } from './app/screens';

export default function App() {
  return <ListingScreen />;
}
