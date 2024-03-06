import * as React from 'react';
import { FlatList } from 'react-native';

import { MainScreen } from '../../ui/layouts';
import { Card } from '../../ui/components';
import { routes } from '../../Navigation';
import { dummyItems, IListingScreenProps, styles } from '.';

const ListingScreen: React.FC<IListingScreenProps> = ({ navigation }) => {
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
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </MainScreen>
  );
};

export default ListingScreen;
