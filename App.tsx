import { AppPicker, AppTextInput } from './app/ui';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import React, { useState } from 'react';
import { MainScreen } from './app/ui/layouts';

const categories = [
  {
    label: 'furniture',
    value: 1
  },
  {
    label: 'Clothing',
    value: 2
  },
  {
    label: 'Cameras',
    value: 3
  }
];
export default function App() {
  const [category, setCategory] = useState();

  return (
    <MainScreen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder={'Categories'}
        icon={'apps'}
      />
      <AppTextInput placeholder={'email'} icon={'email'} />
    </MainScreen>
  );
}
