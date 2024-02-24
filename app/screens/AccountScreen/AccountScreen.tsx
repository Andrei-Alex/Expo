import React from 'react';

import { MainScreen } from '../../ui/layouts';
import { ListItem } from '../../ui/components';
import { FlatList, View } from 'react-native';
import { styles, menuItems } from '.';
import { Icon } from '../../ui/atoms';

function AcoountScreen() {
  return (
    <MainScreen>
      <View style={styles.container}>
        <ListItem
          title={'Andrei'}
          subTitle={'Andrei-Alex@outlook.com'}
          image={require('../../assets/logo-red.png')}
          onPress={() => {
            console.log('Tapped');
          }}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.image.name}
                  backgroundColor={item.image.backgroundColor}
                />
              }
            />
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
    </MainScreen>
  );
}

export default AcoountScreen;
