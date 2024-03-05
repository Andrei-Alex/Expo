import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen, MessageScreen } from '../../screens';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={'Account'} component={AccountScreen} />
    <Stack.Screen name={'Messages'} component={MessageScreen} />
  </Stack.Navigator>
);
