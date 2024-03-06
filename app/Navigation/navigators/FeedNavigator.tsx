import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  ListingDetailsScreen,
  ListingEditScreen,
  ListingScreen
} from '../../screens';

const Stack = createStackNavigator();

export const FeedNavigator = () => (
  <Stack.Navigator mode={'modal'} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={'Listings'} component={ListingScreen} />
    <Stack.Screen name={'ListingEdit'} component={ListingEditScreen} />
    <Stack.Screen name={'ListingDetails'} component={ListingDetailsScreen} />
  </Stack.Navigator>
);
