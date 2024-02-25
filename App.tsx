import { AppTextInput } from './app/ui/components';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import React from 'react';

export default function App() {
  return <AppTextInput icon={'home'} placeholder={'tesssssssssssssssst'} />;
}
