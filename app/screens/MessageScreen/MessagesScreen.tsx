import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { dummyMessages, IListMessage } from '.';
import { ListItem } from '../../ui/components';
import { MainScreen } from '../../ui/layouts';
import { ListDeleteItemAction, ListItemSeparator } from '../../ui/atoms';

function MessagesScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const handleDelete = (message: IListMessage) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <MainScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            image={item.image}
            subTitle={item.description}
            onPress={() => console.log('Selected: ', item)}
            renderRightActions={() => (
              <ListDeleteItemAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </MainScreen>
  );
}

export default MessagesScreen;
