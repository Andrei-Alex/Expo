import { AppTextInput, ErrorMessage } from '../../components';
import { styles } from '../../../screens/LoginScreen';
import * as React from 'react';
import { useFormikContext } from 'formik';
import { IAppFormField } from '.';

const AppFormField: React.FC<IAppFormField> = ({ name, ...props }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        style={styles.inputs}
        {...props}
        onChangeText={handleChange(name)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
