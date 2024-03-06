import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  ListingDetailsScreen,
  ListingEditScreen,
  ListingScreen
} from '../../screens';
import { routes } from '../index';

const Stack = createStackNavigator();

export const FeedNavigator = () => (
  <Stack.Navigator mode={'modal'} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.LISTING} component={ListingScreen} />
    <Stack.Screen name={routes.LISTING_EDIT} component={ListingEditScreen} />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);
