import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AccountScreen, ListingScreen, ListingEditScreen } from '../../screens';

const Tab = createBottomTabNavigator();
export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name={'Listings'} component={ListingScreen} />
    <Tab.Screen name={'ListingEdit'} component={ListingEditScreen} />
    <Tab.Screen name={'Account'} component={AccountScreen} />
  </Tab.Navigator>
);
