import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AccountScreen, ListingEditScreen } from '../../screens';
import { FeedNavigator } from './FeedNavigator';

const Tab = createBottomTabNavigator();
export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name={'Feed'} component={FeedNavigator} />
    <Tab.Screen name={'ListingEdit'} component={ListingEditScreen} />
    <Tab.Screen name={'Account'} component={AccountScreen} />
  </Tab.Navigator>
);
