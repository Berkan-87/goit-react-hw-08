import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOps';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Formik для формы регистрации
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Имя обязательно'),
      email: Yup.string().email('Неверный формат email').required('Email обязателен'),
      password: Yup.string().min(6, 'Пароль должен содержать минимум 6 символов').required('Пароль обязателен'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
        try {
          const { name, email, password } = values;
          const resultAction = await dispatch(register({ name, email, password }));
          if (register.fulfilled.match(resultAction)) {
            toast.success('Регистрация прошла успешно!');
            navigate('/contacts');
          } else {
            toast.error('Ошибка при регистрации');
          }
        } catch {
          toast.error('Что-то пошло не так!');
        } finally {
          setSubmitting(false);
        }
      }
      ,
  });

  return (
    <div className="registration-form">
      <h2>Регистрация</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            type="text"
            name="name"
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
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
        </div>
        
        <div>
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
        </div>
        
        <button type="submit" disabled={formik.isSubmitting}>Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
