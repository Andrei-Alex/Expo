import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles, Props } from '.';

const MainScreen: React.FC<Props> = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default MainScreen;
