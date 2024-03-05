import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ListingDetailsScreen, ListingScreen } from '../../screens';

const Stack = createStackNavigator();

export const FeedNavigator = () => (
  <Stack.Navigator mode={'modal'}>
    <Stack.Screen name={'Listings'} component={ListingScreen} />
    <Stack.Screen
      name={'ListingDetails'}
      component={ListingDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
