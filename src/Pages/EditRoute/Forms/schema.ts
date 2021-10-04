import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(4, 'Password is too short - should be 4 chars min')
});
