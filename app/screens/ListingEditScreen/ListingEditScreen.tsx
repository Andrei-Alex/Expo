import * as React from 'react';
import { categories, styles, validationSchema } from '.';
import {
  AppForm,
  AppFormField,
  MainScreen,
  SubmitButton,
  AppFormPicker,
  CategoryPickerItem
} from '../../ui';

const ListingEditScreen: React.FC = () => {
  return (
    <MainScreen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          PickerItemComponent={CategoryPickerItem}
          name="category"
          placeholder="Category"
          width={'50%'}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton style={styles.button} title="Post" />
      </AppForm>
    </MainScreen>
  );
};

export default ListingEditScreen;
