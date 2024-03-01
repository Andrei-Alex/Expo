import { Image } from 'react-native';
import * as React from 'react';
import { MainScreen, AppFormField } from '../../ui';

import { Formik } from 'formik';

import { styles, validationSchema } from '.';
import SubmitButton from '../../ui/components/SubmitButton/SubmitButton';

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
        {() => (
          <>
            <AppFormField
              name={'email'}
              style={styles.inputs}
              placeholder={'Email'}
              icon={'email'}
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'email-address'}
              textContentType={'emailAddress'}
            />
            <AppFormField
              name={'password'}
              style={styles.inputs}
              placeholder={'Password'}
              icon={'lock'}
              autoCapitalize={'none'}
              autoCorrect={false}
              textContentType={'password'}
              secureTextEntry
            />
            <SubmitButton title={'Login'} style={styles.inputs} />
          </>
        )}
      </Formik>
    </MainScreen>
  );
};

export default LoginScreen;
