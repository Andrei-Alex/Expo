import * as Yup from 'yup';

export const validationSchema = {
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
};
