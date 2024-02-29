import { dummyItems, styles } from '.';
import * as React from 'react';
import { FlatList } from 'react-native';
import { MainScreen } from '../../ui/layouts';
import { Card } from '../../ui/components';

const ListingScreen: React.FC = () => {
  return (
    <MainScreen style={styles.screen}>
      <FlatList
        data={dummyItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </MainScreen>
  );
};

export default ListingScreen;
