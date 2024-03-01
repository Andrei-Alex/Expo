import { Image } from 'react-native';
import * as React from 'react';
import { MainScreen, AppFormField, AppForm, SubmitButton } from '../../ui';

import { styles, validationSchema } from '.';

const LoginScreen: React.FC = () => {
  return (
    <MainScreen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo-red.png')}
      />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
      </AppForm>
    </MainScreen>
  );
};

export default LoginScreen;
