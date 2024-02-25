import { AppPicker, AppTextInput } from './app/ui';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import React from 'react';
import { MainScreen } from './app/ui/layouts';

export default function App() {
  return (
    <MainScreen>
      <AppPicker placeholder={'Categories'} icon={'apps'} />
      <AppTextInput placeholder={'email'} icon={'email'} />
    </MainScreen>
  );
}
