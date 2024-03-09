import * as React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import { MainScreen } from '../../ui/layouts';
import { Card } from '../../ui/components';
import { routes } from '../../Navigation';
import { listingApi } from '../../services';

import { IApiItemForSale } from '../../services/layers/types';
import { IListingScreenProps, styles } from '.';
import { AppButton, AppText } from '../../ui';
import { useApi } from '../../hooks';

const ListingScreen: React.FC<IListingScreenProps> = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings
  } = useApi<IApiItemForSale[]>({
    apiFunc: listingApi.getListings
  });

  return (
    <MainScreen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title={'Retry'} onPress={loadListings} />
        </>
      )}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator animating={true} size={75} />
        </View>
      ) : (
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
      )}
    </MainScreen>
  );
};

export default ListingScreen;
