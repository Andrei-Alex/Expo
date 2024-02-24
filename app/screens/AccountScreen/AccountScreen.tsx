import React from 'react';

import { MainScreen } from '../../ui/layouts';
import { ListItem } from '../../ui/components';

function AcoountScreen() {
  return (
    <MainScreen>
      <ListItem
        title={'Andrei'}
        subTitle={'Andrei-Alex@outlook.com'}
        image={require('../../assets/logo-red.png')}
        onPress={() => {
          console.log('Tapped');
        }}
      />
    </MainScreen>
  );
}

export default AcoountScreen;
