import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number()
    .typeError('Price must be a number')
    .required()
    .min(1)
    .max(10000)
    .label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image')
});
