import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'; // Переименуем Routes
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

const RoutesComponent = () => {
  const token = useSelector(state => state.auth.token);

  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={token ? <Navigate to="/contacts" replace /> : <LoginPage />}
      />
      <Route
        path="/register"
        element={token ? <Navigate to="/contacts" replace /> : <RegistrationPage />}
      />
      <Route
        path="/contacts"
        element={token ? <ContactsPage /> : <Navigate to="/login" replace />}
      />
    </RouterRoutes>
  );
};

export default RoutesComponent;
