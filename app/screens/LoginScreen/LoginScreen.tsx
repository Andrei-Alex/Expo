import { Image } from 'react-native';
import React, { useState } from 'react';
import { MainScreen, AppTextInput, AppButton } from '../../ui';

import { styles } from '.';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <MainScreen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo-red.png')}
      />
      <AppTextInput
        style={styles.inputs}
        placeholder={'Email'}
        icon={'email'}
        autoCapitalize={'none'}
        autoCorrect={false}
        keyboardType={'email-address'}
        textContentType={'emailAddress'}
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        style={styles.inputs}
        placeholder={'Password'}
        icon={'lock'}
        autoCapitalize={'none'}
        autoCorrect={false}
        textContentType={'password'}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <AppButton
        title={'Login'}
        onPress={() => console.log(email, password)}
        style={styles.inputs}
      />
    </MainScreen>
  );
};

export default LoginScreen;
