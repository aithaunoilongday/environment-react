import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signInSchema } from './schema';

type InitialValues = {
  email: string;
  password: string;
};

const initialValues: InitialValues = {
  email: '',
  password: ''
};

export const ValidateForms = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container">
            <h1>Sign in to continue</h1>
            <Form>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={errors.email && touched.email ? 'input-error' : null}
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div>

              <div className="form-row">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className={errors.password && touched.password ? 'input-error' : null}
                />
                <ErrorMessage name="password" component="span" className="error" />
              </div>

              <button
                type="submit"
                className={!(dirty && isValid) ? 'disabled-btn' : ''}
                disabled={!(dirty && isValid)}
              >
                Sign In
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
