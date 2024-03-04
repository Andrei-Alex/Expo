import * as React from 'react';

import { useFormikContext } from 'formik';

import { ImageInputList } from '../../features';
import { ErrorMessage } from '../../components';
import { IAppFormImagePicker } from '.';

const AppFormImagePicker: React.FC<IAppFormImagePicker> = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageURI) => imageURI !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageURIs={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormImagePicker;
