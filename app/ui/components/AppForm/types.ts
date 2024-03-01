export type FormValues = { [key: string]: string };
import { SchemaOf } from 'yup';

export interface IAppForm {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
  validationSchema: SchemaOf<FormValues>;
  children: React.ReactNode;
}
