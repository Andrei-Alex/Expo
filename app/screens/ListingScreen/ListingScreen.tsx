import * as React from 'react';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { MainScreen } from '../../ui/layouts';
import { Card } from '../../ui/components';
import { routes } from '../../Navigation';
import { listingApi } from '../../services';

import { ApiResponse } from 'apisauce';
import { IApiItemForSale } from '../../services/layers/types';
import { IListingScreenProps, styles } from '.';

const ListingScreen: React.FC<IListingScreenProps> = ({ navigation }) => {
  const [listings, setListings] = useState<IApiItemForSale[]>([]);

  useEffect(() => {
    (async () => {
      const response: ApiResponse<IApiItemForSale[]> =
        await listingApi.getListings();
      setListings(response.data);
    })();
  }, []);

  return (
    <MainScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </MainScreen>
  );
};

export default ListingScreen;
