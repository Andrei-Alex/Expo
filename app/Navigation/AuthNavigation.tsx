import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, WelcomeScreen } from '../screens';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
