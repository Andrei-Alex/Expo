import { Image } from 'react-native';
import * as React from 'react';
import {
  MainScreen,
  AppTextInput,
  AppButton,
  AppText,
  ErrorMessage
} from '../../ui';

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
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              onBlur={() => setFieldTouched('email')}
              style={styles.inputs}
              placeholder={'Email'}
              icon={'email'}
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'email-address'}
              textContentType={'emailAddress'}
              onChangeText={handleChange('email')}
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              onBlur={() => setFieldTouched('password')}
              style={styles.inputs}
              placeholder={'Password'}
              icon={'lock'}
              autoCapitalize={'none'}
              autoCorrect={false}
              textContentType={'password'}
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
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
