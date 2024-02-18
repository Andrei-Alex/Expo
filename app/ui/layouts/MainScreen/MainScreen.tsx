import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles, Props } from '.';

const MainScreen: React.FC<Props> = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default MainScreen;
