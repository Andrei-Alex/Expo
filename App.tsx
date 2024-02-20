import { MainScreen } from './app/ui/layouts';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import React from 'react';
import { Icon } from './app/ui/atoms';
import { ListItem } from './app/ui/components';

export default function App() {
  return (
    <MainScreen>
      <ListItem
        title={'My title'}
        onPress={() => console.log()}
        ImageComponent={<Icon name={'email'} />}
        renderRightActions={() => <Icon name={'email'} />}
      />
    </MainScreen>
  );
}
