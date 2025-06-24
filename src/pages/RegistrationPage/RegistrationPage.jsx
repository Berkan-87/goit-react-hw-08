import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOps';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
        try {
          const { name, email, password } = values;
          const resultAction = await dispatch(register({ name, email, password }));
          if (register.fulfilled.match(resultAction)) {
            toast.success('Registration successful!');
            navigate('/contacts');
          } else {
            toast.error('Registration error');
          }
        } catch {
          toast.error('Something went wrong!');
        } finally {
          setSubmitting(false);
        }
      }
      ,
  });

  return (
    <div className="registration-form">
      <h2>Registration</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
        </div>
        
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
        </div>
        
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Create a password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
        </div>
        
        <button type="submit" disabled={formik.isSubmitting}>Sign up</button>
      </form>
    </div>
  );
};



export default RegistrationPage;


