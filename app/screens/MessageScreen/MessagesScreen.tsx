import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { styles, dummyMessages } from '.';
import { ListItem } from '../../ui/components';

function MessagesScreen() {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}

export default MessagesScreen;
