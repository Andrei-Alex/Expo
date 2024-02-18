import React from 'react';
import { FlatList, View } from 'react-native';
import { dummyMessages } from '.';
import { ListItem } from '../../ui/components';
import { MainScreen } from '../../ui/layouts';
import { ListDeleteItemAction, ListItemSeparator } from '../../ui/atoms';

function MessagesScreen() {
  return (
    <MainScreen>
      <FlatList
        data={dummyMessages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            image={item.image}
            subTitle={item.description}
            onPress={() => console.log('Selected: ', item)}
            renderRightActions={() => <ListDeleteItemAction />}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </MainScreen>
  );
}

export default MessagesScreen;
