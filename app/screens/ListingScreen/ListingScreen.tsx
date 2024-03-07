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
import { AppButton, AppText } from '../../ui';

const ListingScreen: React.FC<IListingScreenProps> = ({ navigation }) => {
  const [listings, setListings] = useState<IApiItemForSale[]>([]);
  const [error, setError] = useState(false);

  const loadListings = async () => {
    const response: ApiResponse<IApiItemForSale[]> =
      await listingApi.getListings();
    if (!response.ok) {
      setError(true);
      return;
    }
    setError(false);
    setListings(response.data);
  };

  useEffect(() => {
    (async () => {
      await loadListings();
    })();
  }, []);

  return (
    <MainScreen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title={'Retry'} onPress={loadListings} />
        </>
      )}
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
