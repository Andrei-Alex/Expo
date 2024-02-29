import * as React from 'react';

import { MainScreen } from '../../ui/layouts';
import { ListItem } from '../../ui/components';
import { FlatList, View } from 'react-native';
import { styles, menuItems } from '.';
import { Icon, ListItemSeparator } from '../../ui/atoms';

function AccountScreen() {
  return (
    <MainScreen style={styles.screen}>
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
              IconComponent={
                <Icon
                  name={item.image.name}
                  backgroundColor={item.image.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={(item) => item.title}
        />
      </View>
      <ListItem
        title={'Log Out'}
        IconComponent={<Icon name="logout" backgroundColor={'#ffe66d'} />}
      />
    </MainScreen>
  );
}

export default AccountScreen;
