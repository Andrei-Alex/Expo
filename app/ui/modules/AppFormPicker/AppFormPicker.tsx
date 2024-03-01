import * as React from 'react';
import { useFormikContext } from 'formik';
import { AppPicker } from '../../features';
import { ErrorMessage } from '../../components';
import { IAppFormPicker, styles } from '.';

const AppFormPicker: React.FC<IAppFormPicker> = ({
  items,
  name,
  placeholder
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        style={styles.picker}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
