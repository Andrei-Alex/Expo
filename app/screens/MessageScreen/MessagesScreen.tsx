import React from 'react';
import { FlatList } from 'react-native';
import { dummyMessages } from '.';
import { ListItem } from '../../ui/components';
import { MainScreen } from '../../ui/layouts';

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
          />
        )}
      />
    </MainScreen>
  );
}

export default MessagesScreen;
