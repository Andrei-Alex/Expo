import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen, MessageScreen } from '../../screens';
import { routes } from '../.';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={routes.MESSAGES} component={MessageScreen} />
  </Stack.Navigator>
);
