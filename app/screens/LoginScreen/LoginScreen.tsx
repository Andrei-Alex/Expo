import { Image } from 'react-native';
import * as React from 'react';
import { MainScreen, AppTextInput, AppButton } from '../../ui';

import { Formik } from 'formik';

import { styles, validationSchema } from '.';

const LoginScreen: React.FC = () => {
  return (
    <MainScreen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo-red.png')}
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              style={styles.inputs}
              placeholder={'Email'}
              icon={'email'}
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'email-address'}
              textContentType={'emailAddress'}
              onChangeText={handleChange('email')}
            />
            <AppTextInput
              style={styles.inputs}
              placeholder={'Password'}
              icon={'lock'}
              autoCapitalize={'none'}
              autoCorrect={false}
              textContentType={'password'}
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            <AppButton
              title={'Login'}
              onPress={handleSubmit}
              style={styles.inputs}
            />
          </>
        )}
      </Formik>
    </MainScreen>
  );
};

export default LoginScreen;
