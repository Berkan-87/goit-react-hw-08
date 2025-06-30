import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/authOps';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const resultAction = await dispatch(login(values));
        if (login.fulfilled.match(resultAction)) {
          toast.success('Login successful!');
          navigate('/contacts');
        } else {
          toast.error('Login failed.');
        }
      } catch {
        toast.error('Something went wrong!');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
        </div>

        <button type="submit" disabled={formik.isSubmitting}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
